require 'json'
require_relative 'application_controller'

class ProductsController < ApplicationController
  def index
    rows = $db.execute('SELECT * FROM products')
    data  = normalize_sqlite_result_to_hash_array(rows )
    respond_with do
      #status 200
      #headers [{ 'X-tag' => '1234' }, {'Token' => 'ABcd123XyZ'}]
      headers [{ 'Content-Type' => 'application/json' }]
      body data.to_json
    end
  end

  def get
    row = $db.execute "SELECT * FROM products WHERE id = #{params[:id]}"
    if row.empty?
      respond_with do
        status 404
        body 'Record not found'
      end
    else
      data  = normalize_sqlite_result(row )
      respond_with do
        headers [{ 'Content-Type' => 'application/json' }]
        body data.to_json
      end
    end
  end

  def post
    $db.execute "INSERT INTO products (name, qts) VALUES (?, ?)",
                                  [params['name'], params['qts']]
    id = $db.last_insert_row_id
    row = $db.execute "SELECT * FROM products WHERE id = #{id}"
    if row.empty?
      respond_with do
        status 404
        headers [{ 'Content-Type' => 'text/html' }]
        body 'Record not found'
      end
    else
      data  = normalize_sqlite_result(row )
      respond_with do
        status 201
        headers [{ 'Content-Type' => 'application/json' }]        
        body data.to_json
      end
    end
  end

  def put
    $db.execute "UPDATE products SET name = '#{params['name']}',
                     qts = '#{params['qts']}' WHERE id = #{params[:id]}"
    row = $db.execute "SELECT * FROM products WHERE id = #{params[:id]}"
    if row.empty?
      respond_with do
        status 404
        headers [{ 'Content-Type' => 'text/html' }]        
        body 'Record not found'
      end
    else
      data  = normalize_sqlite_result(row)
      respond_with do
        headers [{ 'Content-Type' => 'application/json' }]      
        body data.to_json
      end
    end
  end

  def delete
    $db.execute "DELETE FROM products WHERE id = #{params[:id]}"
    row = $db.execute "SELECT * FROM products WHERE id = #{params[:id]}"
    if row.empty?
      respond_with do
        headers [{ 'Content-Type' => 'text/html' }]      
        body params[:id].to_json
      end
    else
      respond_with do
        status 503
        headers [{ 'Content-Type' => 'text/html' }]        
        body 'Service Unavailable'
      end
    end
  end
end

require 'json'
require_relative 'application_controller'

class UsersController < ApplicationController
  def index
    rows = $db.execute('SELECT * FROM users')
    data  = normalize_sqlite_result_to_hash_array(rows )
    respond_with do
      status 200
      headers [{ 'Content-Type' => 'application/json' }]
      body data.to_json
    end
  end

  def get
    row = $db.execute "SELECT * FROM users WHERE id = #{params[:id]}"
    if row.empty?
      respond_with do
        status 404
        headers [{ 'Content-Type' => 'text/html' }]        
        body 'Record not found'
      end
    else
      data  = normalize_sqlite_result_to_hash_array(row )
      respond_with do
        headers [{ 'Content-Type' => 'application/json' }]      
        body data.to_json
      end
    end
  end

  def post
    $db.execute "INSERT INTO users (name, surname, email) VALUES (?, ?,  ?)",
                                  [params['name'], params['surname'], params['email']]
    id = $db.last_insert_row_id
    row = $db.execute "SELECT * FROM users WHERE id = #{id}"
    if row.empty?
      respond_with do
        status 404
        headers [{ 'Content-Type' => 'text/html' }]        
        body 'Record not found'
      end
    else
      data  = normalize_sqlite_result_to_hash_array(row )
      respond_with do
        headers [{ 'Content-Type' => 'application/json' }]      
        body data.to_json
      end
    end
  end

  def put
    $db.execute "UPDATE users SET name = '#{params['name']}',
                     surname = '#{params['surname']}', email = '#{params['email']}' WHERE id = #{params[:id]}"
    row = $db.execute "SELECT * FROM users WHERE id = #{params[:id]}"
    if row.empty?
      respond_with do
        status 404
        headers [{ 'Content-Type' => 'text/html' }]        
        body 'Record not found'
      end
    else
      data  = normalize_sqlite_result_to_hash_array(row)
      respond_with do
        headers [{ 'Content-Type' => 'application/json' }]      
        body data.to_json
      end
    end
  end

  def delete
    $db.execute "DELETE FROM users WHERE id = #{params[:id]}"
    row = $db.execute "SELECT * FROM users WHERE id = #{params[:id]}"
    if row.empty?
      respond_with do
        headers [{ 'Content-Type' => 'application/json' }]      
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

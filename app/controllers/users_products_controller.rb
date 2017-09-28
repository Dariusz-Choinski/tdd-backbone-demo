require 'json'
require_relative 'application_controller'

class UsersProductsController < ApplicationController
  def index
    result = $db.execute("SELECT product_id FROM users_products WHERE user_id = #{params[:id]}")
    id_array = normalize_sqlite_result_to_value_array(result, "product_id")
    ids = id_array.to_s.sub('[','(').sub(']',')')
    products = $db.execute("SELECT * FROM products WHERE id in" + ids)
    data  = normalize_sqlite_result_to_hash_array(products)
    respond_with do
      headers [{ 'Content-Type' => 'application/json' }]    
      body data.to_json
    end
  end
  
  def get
    result = $db.execute("SELECT product_id FROM users_products WHERE user_id = #{params[:id]} 
                         AND product_id = #{params[:products][:id]}")
    if result.empty?
      respond_with do
        status 404
        headers [{ 'Content-Type' => 'text/html' }]        
        body 'Record not found'
      end
    else
      product = $db.execute("SELECT * FROM products WHERE id =" +
                                  result.first['product_id'].to_s)
      data  = normalize_sqlite_result_to_hash_array(product)
      respond_with do
        headers [{ 'Content-Type' => 'application/json' }]      
        body data.to_json
      end
    end
  end
end

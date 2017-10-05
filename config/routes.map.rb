module RoutesMap
  def map
    get '/products' => 'products#index'
    get '/products/:id' => 'products#get'
    post '/products' => 'products#post'
    put '/products/:id' => 'products#put'
    delete '/products/:id' => 'products#delete'

    get '/users'  => 'users#index'
    get '/users/:id' => 'users#get'
    post '/users' => 'users#post'
    put '/users/:id' => 'users#put'
    delete '/users/:id' => 'users#delete'

    get '/users/:id/products' => 'users_products#index'
    get '/users/:id/products/:id' => 'users_products#get'
  end
end

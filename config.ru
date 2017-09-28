require 'rack'
require 'rack/cors'
require_relative 'config/init'

use Rack::Cors do |config|
  config.allow do |allow|
    allow.origins '*'
    #allow.resource '/file/list_all/', :headers => :any, methods => :any
    allow.resource '*',
        :methods => [:get, :post, :put, :delete],
        :headers => :any,
        :max_age => 0
  end
end

use Rack::Static, :urls => ["/css", "/js"], :root => "public"
use Rack::Static, :urls => {"/" => 'index.html'}, :root => 'public'
#use Rack::Static, :urls => %w(css js), :root => 'public'

app = Application.new
run app

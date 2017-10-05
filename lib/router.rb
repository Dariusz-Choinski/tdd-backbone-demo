Dir[File.join("app/controllers",  "**/*.rb")].each do |f|
  require_relative "../#{f}"
end
require_relative 'modules/router/routes'

class Router
  attr_accessor :env, :routes, :request_method, :request_path

  def call(env)
    @request = Rack::Request.new(env)
    @response = Rack::Response.new()
    @routes = Routes.new.routes
    @request_method = @request.env['REQUEST_METHOD']
    @request_path  = @request.env['PATH_INFO']
    parse_request
  end

private
  def parse_request
    response = request_response
    return response if response
    return [404, {}, ["Not Found #{@request_path}"]]
  end

  def request_response
    response = false
    @routes.each do |route|
      result = response_to route
      response = result if result
    end
    response
  end

  def response_to(route)
    action_response_for(route) if
      route.map_to?(@request_method, @request_path)
  end

  def action_response_for(route)
    @request.params.merge!(route.params)
    ctrl_name, action_name = route.action.split('#')
    _ControllerName = normalize_the ctrl_name
    controller_instance = instant_of _ControllerName
    ctrl_response  = controller_instance.send(action_name)
    normalize ctrl_response
  end

  def normalize_the(ctrl_name)
    _ControllerName = ctrl_name.split('_').map!{|string| string.capitalize}.join
  end

  def instant_of(_ControllerName)
    controller_instance = Object.const_get(_ControllerName + 'Controller').new
    add_instance_variables_to controller_instance
    controller_instance
  end

  def add_instance_variables_to(instance)
    %w(env params).each do |var|
      val = @request.instance_variable_get("@#{var}")
      merge_request_body_params(val) if var == 'params'
      instance.instance_variable_set("@#{var}", val)
      instance.define_singleton_method(var) { instance_variable_get("@#{var}") }
    end
  end

  def merge_request_body_params(val)
    params_from_body = (@request.env['CONTENT_TYPE'] == 'application/json') ? JSON.parse(@request.body.read):{}
    val.merge! params_from_body if ['POST', 'PUT'].include?(@request_method) && !params_from_body.empty?
  end

  def normalize(ctrl_response)
    @response.status = ctrl_response[:status] || 200
    @response.headers.merge!(ctrl_response[:headers])
    @response.write ctrl_response[:body]
    @response.finish
  end

end

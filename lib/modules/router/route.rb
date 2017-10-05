class Route
  attr_accessor :method, :path, :action, :params

  def initialize(method, path, action)
    @method = method
    @path = path
    @action = action
    @params = {}
  end

  def map_to?(method, path)
    matches?(path) if @method == method
  end

private
  def matches?(path)
    request_path = normalize_path(path)
    route_path = normalize_path(@path)
    return true if root_path?(request_path, route_path)
    return false if paths_different_length?(request_path, route_path)
    return matching_test_for(request_path, route_path)
  end

  def normalize_path(path)
    path = path.split('/')
    path.shift
    path
  end

  def matching_test_for(request_path, route_path)
    request_path.each_with_index do |chunk, i|
      if i.even?
        return false if request_path[i] != route_path[i]
      else
        parse_uri_params(request_path, route_path, chunk, i)
      end
    end
    true
  end

  def parse_uri_params(request_path, route_path, chunk, i)
    @params[route_path[1].gsub(':',  '').to_sym]  =  chunk.to_i if i ==  1
    @params[route_path[i-1].to_sym] =
      { route_path[i].gsub(':',  '').to_sym => chunk.to_i } if i > 2
  end

  def root_path?(request_path, root_path)
    request_path.empty? && route_path.empty?
  end

  def paths_different_length?(request_path, route_path)
    request_path.size != route_path.size
  end
end

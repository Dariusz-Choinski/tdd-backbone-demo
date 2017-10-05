require_relative '../../../config/routes.map'
require_relative 'route'

class Routes
  include RoutesMap
  attr_accessor :routes

  def initialize
    @routes = []
    build_map_convertion_methods
    convert_maps_to_route_objects
  end

private
  def convert_maps_to_route_objects
    map
  end

  Methods  = %w( get post put delete).freeze
  def build_map_convertion_methods
    Methods.each do |method|
      define_singleton_method(method) do |map|
        @routes << Route.new(method.upcase,  map.keys.first, map.values.first)
      end
    end
  end
end

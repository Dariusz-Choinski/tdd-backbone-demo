module BaseController
  def initialize
    @response = {status: nil,  headers: {}, body: ''}
  end

  def respond_with(&block)
    yield
    @response
  end

private
  def status(number)
    @response[:status] = number
  end

  def headers(heads)
    heads.each do |header|
      @response[:headers].merge!(header) if
        header.is_a? Hash
    end
  end

  def body(text)
    @response[:body] = text
  end

  # for sqlite3 result hash: remove index keys from query result
  def normalize_sqlite_result(result)
    data = result.select { |hash|  hash.select!{|key, val| !key.is_a? Numeric }}
    data = data.first
  end

  def normalize_sqlite_result_to_hash_array(result)
    data = result.select { |hash|  hash.select!{|key, val| !key.is_a? Numeric }}
  end

  def normalize_sqlite_result_to_value_array(result, column)
    hash_array = normalize_sqlite_result_to_hash_array(result)
    value_array = hash_array.map {|hash| hash[column]}
  end
end

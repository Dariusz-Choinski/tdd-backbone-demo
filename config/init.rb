require 'sqlite3'
require_relative '../lib/router'

FileUtils.rm('db/dev.db') if File.exist?('db/dev.db')
FileUtils.cp('db/backup.db', 'db/dev.db')

$db = SQLite3::Database.open('db/dev.db')
$db.results_as_hash = true

class Application
  def call(env)
    router = Router.new
    router.call(env)
  end
end


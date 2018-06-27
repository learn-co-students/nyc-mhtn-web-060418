require_relative './config/environment'

# if ActiveRecord::MigrationContext.needs_migration?
#   raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
# end

use BooksController
run ApplicationController

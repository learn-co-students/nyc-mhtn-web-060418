class CreateDepartments < ActiveRecord::Migration[5.2]
  def change
    create_table :departments do |table|
      table.string :name
    end
  end
end

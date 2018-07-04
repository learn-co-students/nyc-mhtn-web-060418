class CreateFiretrucks < ActiveRecord::Migration[5.2]
  def change
    create_table :firetrucks do |t|
      t.string :name

      t.timestamps
    end
  end
end

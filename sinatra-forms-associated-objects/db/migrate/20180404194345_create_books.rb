class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.integer :author_id
      t.string :title
      t.string :snippet
    end
  end
end

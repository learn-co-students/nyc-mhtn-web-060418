class CreateFirepeople < ActiveRecord::Migration[5.2]
  def change
    create_table :firepeople do |t|
      t.string :name
      t.integer :firetruck_id
      t.timestamps
    end
  end
end

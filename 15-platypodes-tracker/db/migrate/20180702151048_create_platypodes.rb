class CreatePlatypodes < ActiveRecord::Migration[5.2]
  def change
    create_table :platypodes do |t|
      t.string :name
      t.integer :number_of_eggs

      t.timestamps
    end
  end
end

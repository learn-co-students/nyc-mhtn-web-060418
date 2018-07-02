class CreateGeese < ActiveRecord::Migration[5.2]
  def change
    create_table :geese do |t|
      t.string :name
      t.integer :people_chased_today

      t.timestamps
    end
  end
end

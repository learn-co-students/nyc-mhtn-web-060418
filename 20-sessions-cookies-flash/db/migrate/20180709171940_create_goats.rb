class CreateGoats < ActiveRecord::Migration[5.2]
  def change
    create_table :goats do |t|
      t.string :name
      t.integer :lifetime_headbutts

      t.timestamps
    end
  end
end

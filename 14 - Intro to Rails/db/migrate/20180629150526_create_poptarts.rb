class CreatePoptarts < ActiveRecord::Migration[5.2]
  def change
    create_table :poptarts do |t|
      t.string :flavor
      t.boolean :toasted
      t.integer :number_of_sprinkles
      t.boolean :ravioli_or_nah
      t.integer :rating

      t.timestamps
    end
  end
end

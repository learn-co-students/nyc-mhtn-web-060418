class CreateBoxers < ActiveRecord::Migration[5.1]
  def change
    create_table :boxers do |t|
      t.text :name
      t.integer :weight
      t.boolean :swole
      # t.integer :trainer_id
      t.references :trainer
    end
  end
end

class CreateSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :secrets do |t|
      t.string :text
      t.integer :author_id

      t.timestamps
    end
  end
end

class CreateLocalizations < ActiveRecord::Migration[5.2]
  def change
    create_table :localizations do |t|
      t.references :elevator, foreign_key: true
      t.references :language, foreign_key: true
      t.string :trigger_word
      t.string :response

      t.timestamps
    end
  end
end

class CreateTrainers < ActiveRecord::Migration[5.1]
  # creates trainer TABLE in our SQL database this is not our RUBY CLASS; RUBY class is defined in app/models/trainer
  def change
    create_table :trainers do |table|
      table.string :name
    end
  end

  # def up
  #
  # end
  #
  # def down
  #
  # end
end

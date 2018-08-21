class CreateUsersSnacksJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_join_table :users, :snacks do |t|
      t.index [:user_id, :snack_id]
      t.index [:snack_id, :user_id]
    end
  end
end

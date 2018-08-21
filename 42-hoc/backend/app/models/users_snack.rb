class UsersSnack < ApplicationRecord
  self.table_name = "snacks_users"
  
  belongs_to :snack
  belongs_to :user
end

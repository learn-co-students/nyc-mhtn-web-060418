class Owner < ApplicationRecord
  has_many :pets, dependent: :delete_all
end

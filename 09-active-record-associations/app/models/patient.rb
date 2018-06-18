class Patient < ActiveRecord::Base
  has_many :appointments
  has_many :doctors, through: :appointments
  # ⬆️ syntactic sugar over this:
  # has_many(:doctors, {through: :appointments})
end

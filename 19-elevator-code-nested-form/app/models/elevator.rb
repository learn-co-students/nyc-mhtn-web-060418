class Elevator < ApplicationRecord
  has_many :localizations
  accepts_nested_attributes_for :localizations
end

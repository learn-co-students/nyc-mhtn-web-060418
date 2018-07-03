class Cow < ApplicationRecord
  belongs_to :farmer

  validates :name, presence: true
end

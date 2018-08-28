class User < ApplicationRecord
  has_secure_password
  validates :username, presence: { case_sensitive: false }
end

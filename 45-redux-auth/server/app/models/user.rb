class User < ApplicationRecord
  has_secure_password #=> gives me User#authenticate(plaintext_password) method
  validates :username, uniqueness: { case_sensitive: false }
end

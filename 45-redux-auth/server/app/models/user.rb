class User < ApplicationRecord
  has_secure_password #=> gives me User#authenticate(plaintext_password) method
  validates :username, presence: { case_sensitive: false }
end

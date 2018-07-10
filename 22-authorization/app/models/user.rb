class User < ApplicationRecord
  validates_uniqueness_of :username

  has_many :secrets, foreign_key: 'author_id'

  has_secure_password

  # def password=(plaintext_password)
  #   self.password_digest = BCrypt::Password.create(plaintext_password)
  # end

  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end
end

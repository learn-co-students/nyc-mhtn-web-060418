class User < ApplicationRecord

  after_save :ensure_snacks!

  has_many :users_snacks
  has_many :snacks, through: :users_snacks

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  def ensure_snacks!
    snackify! unless snacks.length > 0
  end

  def snackify!
    number_of_snacks = rand(5..20)
    Snack.all.sample(number_of_snacks).each do |snack|
      self.snacks << snack
    end
  end

end

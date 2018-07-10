class User < ApplicationRecord

  validates_uniqueness_of :username

end

require_relative './pet'
class Cat < Pet
  attr_accessor :num_lives
  def initialize(name, num_lives = 9)
    # super calls init on parent class, which is Pet
    # Pet.new(name)
    super(name)
    @num_lives = num_lives
  end
end

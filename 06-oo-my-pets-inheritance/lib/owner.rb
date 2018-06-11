require 'pry'
class Owner
  @@all_owners = []
  # INSTANCE METHODS
  attr_reader :species
  attr_accessor :name, :pets
  def initialize(species)
    @species = species
    @pets = { fishes: [], dogs: [], cats: [] }
    # Owner.all
    # returns @@all_owners
    # self is new instance of Owner
    self.class.all << self
  end

  def say_species
    "I am a #{self.species}."
  end

  def buy_fish(fish_name)
    # implicit self.pets
    pets[:fishes] << Fish.new(fish_name)
  end

  def buy_cat(cat_name)
    # implicit self.pets
    self.pets[:cats] << Cat.new(cat_name)
  end

  def buy_dog(dog_name)
    self.pets[:dogs] << Dog.new(dog_name)
  end

  def walk_dogs
    # i have an array of dogs
    # each dog needs to be happy
    # can i change dog moods????? YES with attr_accessor for :mood
    self.pets[:dogs].each { |dog_instance| dog_instance.mood = 'happy' }
    # using .each because i do not care about the return value
  end

  def play_with_cats
    self.pets[:cats].each { |cat_instance| cat_instance.mood = 'happy' }
  end

  def feed_fish
    # implicit self
    pets[:fishes].each { |fish_instance| fish_instance.mood = 'happy' }
  end

  def sell_pets
    # concat all arrays into one array of all pets
    all_pets = pets[:dogs].concat(pets[:cats]).concat(pets[:fishes])
    all_pets.each { |pet_instance| pet_instance.mood = 'nervous' }
    self.pets = { fishes: [], dogs: [], cats: [] }
    # make all pets nervous
    # iterate through hash of pets, making each pet nervous
    # pets.each do |_pet_type, pet_arr|
    #   pet_arr.each do |pet|
    #     pet.mood = 'nervous'
    #   end
    #   pet_arr.clear
    # end
  end

  def list_pets
    # fish_count = self.pets[:fishes].count
    "I have #{pets[:fishes].count} fish, #{pets[:dogs].count} dog(s), and #{pets[:cats].count} cat(s)."
  end

  # CLASS METHODS
  def self.all
    @@all_owners
  end

  def self.reset_all
    # can use implicit self here
    all.clear
  end

  def self.count
    # @@all_owners.count
    self.all.count
  end
end

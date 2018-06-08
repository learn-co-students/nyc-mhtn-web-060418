class Person

  attr_reader :likes_pizza
  
  @@all = []

  def initialize(likes_pizza)
    @likes_pizza = likes_pizza
    @@all << self
  end

    def self.all
      @@all
    end

    def self.count_all
      Person.all.length
    end

    def self.who_like_pizza
      Person.all.select do |person|
        person.likes_pizza
      end
    end

    def self.percentage_who_like_pizza
      return Person.who_like_pizza.length / (Person.count_all * 1.0)
    end

end


Person.new(true)
Person.new(true)
Person.new(true)
Person.new(true)
Person.new(true)
Person.new(false)
Person.new(true)
Person.new(true)

p Person.percentage_who_like_pizza
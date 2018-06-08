require_relative "./user"
require_relative "./tweet"
require 'pry'


coffee_dad = User.new("coffee_dad")
Tweet.new("Having coffee", coffee_dad)
Tweet.new("Got Coffee", coffee_dad)
Tweet.new("It's coffee time", coffee_dad)
Tweet.new("I am full of despair", coffee_dad)

tea_mom = User.new("tea_mom")
Tweet.new("Having Earl Grey", tea_mom)
Tweet.new("Chai tea time!", tea_mom)
Tweet.new("Bubble tea.", tea_mom)
Tweet.new("Love is a lie", tea_mom)


binding.pry

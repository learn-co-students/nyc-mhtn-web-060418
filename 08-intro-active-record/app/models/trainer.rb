class Trainer < ActiveRecord::Base
  has_many :boxers
  # ActiveRecord is using our schema to determine which properties our Ruby classes should have. Our Trainers TABLE has a property of name. therefore, our Trainer class has an attr_accessor for name

  # def boxers
  # ar abstracts this logic via has_many
  #   # instance method on trainer
  #   # self in this method is trainer instance
  #   # self.id here is trainer_instance id
  #   Boxer.all.select do |boxer_instance|
  #     boxer_instance.trainer_id == self.id
  #   end
  # end

  # def initialize(props = {})
  # @id = props[:id]
  # @name = props[:name]
  # end

  # def self.create(props ={})
  #   self.new(props)
  #   INSERT INTO .....
  # return ruby object/instance
  # end

  # def name
  #   @name
  # end
  #
  # def name=(name)
  #   @name = name
  # end
end

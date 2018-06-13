class Trainer < ActiveRecord::Base
  # ActiveRecord is using our schema to determine which properties our Ruby classes should have. Our Trainers TABLE has a property of name. therefore, our Trainer class has an attr_accessor for name

  # def initialize(props = {})
  # @id = props[:id]
  #   @name = props[:name]
  # end

  # def name
  #   @name
  # end
  #
  # def name=(name)
  #   @name = name
  # end
end

class Doctor < ActiveRecord::Base
  belongs_to :department
  has_many :appointments
  has_many :patients, through: :appointments

  # attr_accessor :name
  # def initialize(props = {})
  #   # activerecord is looking at schema to assign properties to our ruby objects
  #   @name = props[:name]
  # end

  # def department
  #   Department.all.find do |dept_instance|
  #     dept_instance.id == self.department_id
  #   end
  # end

end

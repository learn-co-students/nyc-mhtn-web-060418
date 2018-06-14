class Boxer < ActiveRecord::Base
  belongs_to :trainer
  # def trainer
  # self here is a boxer instance
  # boxer instances have trainer_id
  #   Trainer.find(self.trainer_id)
  # end
end

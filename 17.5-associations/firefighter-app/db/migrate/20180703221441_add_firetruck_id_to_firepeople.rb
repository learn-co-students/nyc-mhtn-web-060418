class AddFiretruckIdToFirepeople < ActiveRecord::Migration[5.2]
  def change
    add_column :firepeople, :firetruck_id, :integer
  end
end

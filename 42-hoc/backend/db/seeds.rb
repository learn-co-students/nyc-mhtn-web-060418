# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

snack_names = []

500.times do
  snack_names << Faker::Food.dish
  snack_names << Faker::Food.ingredient
  snack_names << Faker::Dessert.variety
  snack_names << Faker::Dessert.topping
end

snack_names.uniq.shuffle.each do |snack_name|
  snack = Snack.create(name: snack_name)
end

100.times do 
  user = User.create(username: Faker::Internet.user_name, password_digest: BCrypt::Password.create(Faker::Internet.password))
end
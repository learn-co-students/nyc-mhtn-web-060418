# ActiveRecord Associations

#### Migrations

- creating migrations from the command line
  <!-- * `rake db:create_migration NAME=create_users` -->
- migration syntax

  ```ruby
  def change

  end
  ```

- **always remember** check the schema after running all migrations to confirm everything worked

#### Models

- Test our models in the console––can I create a new ruby instance? Can I save that into my database? Does it have the correct attributes? Check these before moving forward

### Our First ActiveRecord Relationships

- What does the `belongs_to` do for us?
- What does the `has_many` do for us?
- We need to setup this association on **both models**; this cannot be one-sided.
- How can we create a `has_many :through` association?

### Seeds.rb

- The `seeds.rb` file allows us to create some sample data that will be added to the db when calling `rake db:seed` from the command line

### Wrap Up

- difference between `Model.new` `Model#save` and `Model.create`
- difference between changing attributes `Model#save` `Model#update`
- if something `belongs_to` another model, it **needs** the foreign key of the model it belongs to on its table––if a `Tweet` `belongs_to` a `User`, it needs the `user_id` on its table
- if we do the `belongs_to`, we need to include the inverse `has_many`––`User` `has_many :tweets`
- we can use `has_many` `:through` when creating many to many associations
  - ActiveRecord will automatically create instances of our join model when using the `<<` operator
- 1000 times easier than writing raw sql
- As always, 😍**THX ActiveRecord**😍

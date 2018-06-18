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

### Wrap Up

- difference between new \(+ save\) and create
- difference between changing attributes \(+ save\) and update
- if something has a foreign_key it belongs to the table from the foreign key
- if we do the `belongs_to`, we need to include the inverse `has_many`
- we can use `has_many` `:through` when creating many to many associations
  - ActiveRecord will automatically create instances of our join model when using the `<<` operator
- 1000 times easier than writing raw sql
- As always, 😍**THX ActiveRecord**😍

### Rake and File Structure

- Rake
  - We have a Rakefile that defines tasks to be run from the command line
  - To view tasks, run `rake -T` from your terminal
  - Tasks allow us to encapsulate ruby code that we want to execute **from the command line**
  - We're getting some tasks from the `sinatra/activerecord/rake` library which gives us easy to use ActiveRecord tasks (we can see this included in our gemfile)
  ***
- File structure
  - Gemfile––what is a gemfile? Why on earth would we want to use one?
  - `app` folder holds our models––our Ruby classes
  - `db` directory holds migrations and seeds.rb file––what are our seeds?
  - `config` holds environment file
    - `require 'bundler'` and `Bundler.require` **load all of the gems in our Gemfile**
    - `ActiveRecord::Base.establish_connection` **sets up our database** (with options hash)
    - `require_all` **loads all of our application code**

---

### Migrations and Database Structure

- we want to create our first model \(ruby class + sql table\)––how to we bridge the gap between sql data and our ruby classes?
- What is a model? Our Ruby Class
- What is a migration? Some ruby code that alters our schema
- What is a schema? The structure of our database
- to get our database set up, we need to use the `rake db:create_migration NAME=create_boxers`
- check out the migrations in the `db/migrations` folder

  - what is the sequence of numbers in the beginning of the file name? It's a time stamp that identifies our migrations. We need these migrations to run in the order in which they were created.
  - What are the `change`, `up`, and `down` methods in migrations? These ActiveRecord methods allow us to alter our db schema.

- `create_table` method which takes a block, the block takes a table builder

  - why do we use the `t` variable?
  - `t.string :name` what is the `string` method declaring? This table will have a property called name that is a string

  ***

- run migrations `rake db:migrate`

  - Our `schema.rb` which is the **authoritative representation of the database structure**
  - look at the `version` argument in the schema to see if it matches with the last successful migration timestamp. **These should match if your migration succeeded**

  ***

- migration conventions

  - **file name and class name must match up exactly, but in different case**––for example `TIMESTAMP_create_trainers.rb` our db table is pluralized `trainers` and our model (Ruby class) is singular

    ```ruby
    class Trainer < ActiveRecord::Base
    end
    ```

  - create_table block argument is usually a `t`

- blowing up the database (DO NOT DO IN REAL LIFE)
  - delete db
  - delete schema.rb
  - !!! don't do this, just in this module, and don't do it if you can't easily get your data back
  - instead, use `rake db:rollback`
  ***
- gracefully fixing the db
  - create a new migration
  - roll that migration back
  - delete the migration files you don't want to keep
- we don't need to create migration files by hand anymore! 😍THX ACTIVERECORD😍

### Connecting Models to ActiveRecord

- Our models (Ruby classes) appear in `app/models`
  - **MAJOR KEY 🔑** convention is to have the model class name singular and the sql table plural––
  ```ruby
  class Trainer < ActiveRecord::Base
  end
  ```
  but the table is called `trainers`
- Since our Ruby classes inherit from ActiveRecord, we have access to AR methods

  - We can use `Trainer.create(name: 'John Kavanagh')` to both **save our trainer to the db** and **create a ruby object with that same data**
  - How do we suddenly know which attributes our trainer is supposed to have?

- A boxer belongs to a trainer, so we need to create it with an trainer_id: `Boxer.create(name: 'Cris Cyborg', trainer_id: 1)`

- How can we associate a boxer with an author and vice-versa?

```ruby
class Boxer < ActiveRecord::Base
  def trainer
    # Trainer.all.find{ |trainer| trainer.id == self.trainer_id }
    # OR use AR .find
    Trainer.find(self.trainer_id)
  end
end
#...
class Trainer < ActiveRecord::Base
  def boxers
    # Boxer.all.select{|boxer| boxer.trainer_id == self.id}
    # OR use AR .where
    Trainer.where(trainer_id: self.id)
  end
end
```

## What About a Better Way™️

- ActiveRecord Macros
  - Boxer model: `belongs_to :trainer`
  - Trainer model `has_many :boxers`
- These macros provide **even more** methods, like `boxer_instance.trainer` and `trainer_instance.boxers`
  - **Major Key🔑**––since a boxer belongs_to a trainer it should have ONE trainer. Therefore the method is `.trainer`. A trainer HAS MANY boxers, therefore the method is `.boxers` pay attention to what is singular and what is plural.

### Important Methods from ActiveRecord

- Model.new
  - creates a new **RUBY** instance in local memory without persisting to the database
- Model\#save
  - inserts or updates a **RUBY** instance to the db
- Model.create
  - Model.new + Model\#save
  - A class method that creates a new **RUBY** instance AND saves it to the database
- Model.all
  - returns all instances (we wrote this by hand a million times)
- Model.first
  - instance with the lowest ID in the db
- Model.find
  - Finds a record by id and returns a Ruby instance––`Boxer.find(1)` returns the boxer with an id of 1
- Model.find_by\({ attribute: value }\)
  - can find by one attribute-value pair or multiple
  - `Boxer.find(name: 'Mike Tyson')` will return the boxer with a name of 'Mike Tyson'

[Active Record Docs](http://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-up-down-methods)

# ruby-tdd

Why is Unit testing important? Most of our large code projects are more like frankenstein's monster or the Power Rangers Megazord than anything else:

![](https://media.giphy.com/media/14lpUNhInOSz9S/giphy.gif)

They're a series of components that work together to make a larger, functioning program. But when the program doesn't work, it's difficult to identify which of the components have failed. Unit testing lets us look at each individual component piece-by-piece, to see which one's broken and why.

Testing also allows us to check for specific behavior, allowing us to _assume_ or _validate_ that new code fits that behavior without having to manually check it all ourselves. We want our tests to respond to failing behavior as soon as that behavior is introduced.

Finally, we can use testing to refactor or change our code without worrying about errant behavior, since the test will catch any mistakes that we inevitably make.

### Intro Code

We'll start off by setting up a project with a Gemfile. Our Gemfile should list the `rspec` gem and likely also the `pry` gem to debug. Once we've got the Gemfile set up, we'll run `bundle install` to install all of our dependencies, then run `rspec --init`.

This last command adds a few new files to our directory: `.rspec` which is some configuration for RSpec in the command line, and `spec/spec_helper.rb` which is configuration for when tests are run in the context of Ruby.

Peek into the `spec/spec_helper.rb` to get a better sense of what each of these files are doing and why they're here. The [RSpec Configuration documentation](http://rubydoc.info/gems/rspec-core/RSpec/Core/Configuration) also provides some helpful tips on configuring RSpec how you'd like it.

Next, we will want to add a file for our program. We've cleverly named ours `program.rb` and it will hold all of our application code. We can start by writing a method in here called `is_palindrome?(word)` which takes in a word and outputs true if it is a palindrome and false if it isn't.

```ruby
# program.rb

def is_palindrome?(word)
end
```

Test-driven development \(TDD\) is all about **tests being the real fuel that helps you write your code**. The general rule here is called "red, green, refactor", which means that you'll:

1.  Write your test, run your test suite, and **look for the failure**
2.  Implement a **naive, passing solution** to your failing test
3.  **Rewrite your original solution** to optimize it or make it more readable

We'll break down the technique a little bit more in the following sections, but for now, we've got a program with no tests, so let's write our first two tests.

Tests go into the `spec` folder created by the `rspec --init` command. The pattern for naming tests is usually `<some feature>_spec.rb` when using RSpec. When using other testing frameworks for other languages, there may be other conventions, so be sure to read the documentation before writing tests.

We'll create a file called `is_palindrome_spec.rb` and place it in our `spec` folder. Our file structure should look like this now:

- program.rb
- Gemfile
- .rspec
- spec/
  - spec_helper.rb
  - is_palindrome_spec.rb

Spec files are composed of a few pieces. First, you have to require the file that you want to test. This may seem obvious, but it's not done for you automatically.

Second, you will want to give some context to your set of tests, and this part of the spec is called the `describe` block. Usually, this will just say which part of the program you're testing, so here, we can just use `"is_palindrome?"` as the description.

Third, you'll want to write your actual test cases. These live in `it` blocks, where the string after the `it` method describes the conditions or the case the test is running.

And lastly, you will need to write your actual assertion which is in the form `expect(<some executable code>).to be <some value>`. There are a few pieces to this, but we will just use this pattern for the first few tests.

```ruby
# spec/is_palindrome_spec.rb

# first
require_relative "../program.rb"

# second
describe "is_palindrome?" do

  # third
  it "returns true for dad" do # coffee-dad

    # fourth
    expect(is_palindrome? "dad").to be true
  end
end
```

Nothing left to do but run the tests. You should see a similar output to what's below.

```bash
F

Failures:

  1) is_palindrome? returns true for dad
     Failure/Error: expect(is_palindrome? "dad").to be true

       expected true
            got nil
     # ./spec/is_palindrome_spec.rb:8:in `block (2 levels) in <top (required)>'

Finished in 0.01401 seconds (files took 0.09962 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/is_palindrome_spec.rb:5 # is_palindrome? returns true for dad
```

---

### Testing Strategy

What are the cases we want to test? What if someone inputs an integer, not a string?

- the base case or the happy path; behavior that we expect to work (string)
- the sad path; behavior that we expect to break
- extreme edge cases; things like bad inputs or system errors

```ruby
# spec/is_palindrome_spec.rb

# ...
  it "should return false if input is 'father'"           # "father" -> false
  it "should return false if input is empty string"       # "" -> false
  it "should return true if input is a single character"  # "z" -> true
  it "should not care about case"                         # "Dad" -> true
  it "should not care about spaces"                       # "d ad  " -> true
  it "should not care about punctuation"                  # ".!d @a $d" -> true
  it "should not care about accents"                      # "mømdådmøm" -> true
end
```

---

#### When Do we Write Tests?

- before/after adding a feature
- before/after fixing a bug that didn't have tests

### Writing Tests

- What is an assertion?
  - The assertion is the entire line beginning with `expect`; it's just the thing that you statement that you believe to be true.
- What is a matcher?
  - The matcher is the piece after the `expect`, which will compare the return value of the argument to `expect` with some other value or condition that you expect to be true. In other words, what do we expect the result to be?

```ruby
# spec/is_palindrome_spec.rb

# ...

  it "should return true if input is dad" do
    expect(is_palindrome? "dad").to be true
  end

# ...
```

- How should we proceed?
  - Run our tests
  - See them fail <span style="color:red;">(RED)</span>
  - Write the least amount of code needed to pass the tests <span style="color:green;">(GREEN)</span>
  - Refactor our solution <span style="color:green;">(REFACTOR)</span>

* What about edge cases? What else can we test for?

  - Wrong number of arguments?
  - We can also pass a block to our tests

```ruby
# spec/is_palindrome_spec.rb

# ...

  it "should raise an error if input is a number" do
    expect { is_palindrome? 4 }.to raise_error ArgumentError
  end

# ...
```

Here's a valid solution to the problem:

```ruby
# program.rb

def is_palindrome?(word)
  raise ArgumentError if !word.is_a?(String)
  return false if word.empty?
# gsub will remove anything that is NOT (^ indicates not)
  # digit 0-9
  # lowercase letter a-z
  # uppercase letter A-Z
  # accented character À-ÿ
# with an empty string
  downcased_word = word.downcase.gsub(/[^0-9A-ZÀ-ÿa-z]/, '')
  downcased_word == downcased_word.reverse
end
```

### Writing Testable Code

- Code that is encapsulated well is easy to test

  - Our methods have clear inputs/outputs:
    - Methods with a lot of responsibilities are hard to test
    - Methods that have one responsibility are easier to test
  - We have sufficiently abstracted out dependencies:
    - A `Driver` class does not need to know how a `Car` converts gasoline into fuel; it simply need to know about `Car#gas_pedal`, `Car#brake`, `Car#steering_wheel`
    - The `Driver` can _interface_ with the `Car` without caring about or needing to know how the `Car` works under the hood
    - We've seen this on a smaller scale by relying on our `Class.all` method to read/write to an `@@all` class variable. The class just needs the data but does not care about the literal variable name

```ruby
class Person
  @@all_people = []
  def initialize(props = {})
    @name = name
    self.class.all << self
  end

  def self.all
    @@all_people
  end
end
```

<!-- - Code that does not rely on side effects is easy to test. The more tangled our code becomes, the harder it is to test. How many side effects do our methods have? The more they have, the harder they are to test. In other words, methods that mutate data or rely on global variables are hard to test. -->

### Workshop Exercise

Add a new function to the `program.rb` called `factorial`.

```ruby
# program.rb

# ...

def factorial(num)
  # factorial(4)        ->    4 * 3 * 2 * 1     ->    24
  # factorial(0)        ->    1
  # factorial('hello')  ->    ArgumentError
end
```

- Write tests for this method, and implement a working solution

## Resources

- [Software Testing](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/)
- [RSpec documentation](http://rspec.info/documentation/)
- [Rspec-Rails Documentation](https://github.com/rspec/rspec-rails)

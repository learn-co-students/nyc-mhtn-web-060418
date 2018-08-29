### JWT Auth in Redux and Rails

## Part 1: R A I L S

* Token-based authentication is stateless. We are not storing any information about a logged in user on the server (which also means we don't need a model or table for our user sessions). No stored information means your application can scale and add more machines as necessary without worrying about where a user is logged in.

* Here is the JWT authentication flow for logging in:
  1. An already existing user requests access with their username and password
  2. The app validates these credentials
  3. The app gives a signed token to the client
  4. The client stores the token and presents it with every request. This token is effectively the user's access pass––it proves to our server that they are who they claim to be.

* JWTs are composed of three strings separated by periods:

  ```
  aaaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbb.ccccccccccccccccccc
  ```

  * The first part (aaaaaaaaaaaa) is the header

  * The second part (bbbbbbbbbbbb) is the payload - the good stuff, like who this person is, and their id in our database.

  * The third part (ccccccccccccc) is the signature. The signature is a hash of the header and the payload. It is hashed with a secret key, that we will provide (and should store in an environment variable using a gem like [Figaro](https://github.com/laserlemon/figaro#getting-started))

  * Head on over to [jwt.io](http://jwt.io/#debugger) and see what I mean:

  <img width="750" alt="JWTs" src="https://cloud.githubusercontent.com/assets/25366/9151601/2e3baf1a-3dbc-11e5-90f6-b22cda07a077.png">

### Encoding and Decoding JWTs

* Add `gem 'jwt'` to your Gemfile
* After calling `bundle install` we can see some of the functionality by opening a `rails console`
  * `JWT.encode` takes up to three arguments: a payload to encode, an application secret of the user's choice, and an optional third that can be used to specify the hashing algorithm used. Typically, we don't need to show the third. This returns a JWT as a string.
  * `JWT.decode` takes three arguments as well: a JWT as a string, an applicatin secret, and optionally a hashing algorithm.

```ruby
#in rails console
>  payload = { beef: 'steak' }

> jwt = JWT.encode(payload, 'boeuf')

=> "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"

> decoded_hash = JWT.decode(jwt, 'boeuf')
=> [{"beef"=>"steak"}, {"alg"=>"HS256"}]

> data = decoded_hash[0]
=> {"beef"=>"steak"}
```

* Building this functionality into our `application_controller.rb`. Given that many different controllers will need to authenticate and authorize users––`AuthController`, `UsersController`, etc––it makes sense to lift the functionality of encoding/decoding tokens to our top level `ApplicationController`. Recall that **all** controllers inherit from `ApplicationController`

```ruby
class ApplicationController < ActionController::API
  def issue_token(payload)
    # payload => { beef: 'steak' }
    JWT.encode(payload, "supersecretcode")
    # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
  end

  def decode_token(token)
    # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"

    JWT.decode(token, "supersecretcode")[0]
    # JWT.decode => [{"beef"=>"steak"}, {"alg"=>"HS256"}]
    # [0] gives us the payload
  end
end
```

### Integrating JWT into Auth Flow

* A token should be issued in two different controller actions: `users#create` and `auth#create`. Think about what each of these methods correspond to––**a user signing up for our app for the first time** and **an already existing user logging back in**.

* We can simply call our `issue_token` method, passing the found/created user's ID in a payload. The newly created JWT can then be passed back along with the user's data. The user data can be stored in our application's state, while the token can be stored in `localStorage`––more on this later.

```ruby
# auth_controller.rb
def create
  user = User.find_by(username: params[:username])
  if !!user && user.authenticate(params[:password])
    payload = {user_id: user.id}
    token = issue_token(payload)
    render json: { jwt: token, yay: true }
  else
    render json: { error: "You dun goofed!"}
  end
end

# users_controller.rb
def create

  user = User.create(username: params[:username], password: params[:password])
  if user.valid?
    payload = {user_id: user.id}
    token = issue_token(payload)
    render json: { jwt: token, yay: true }
  else
    render json: { error: "You dun goofed!"}
  end
end


```

* A few things to keep in mind about the code above:
  * `User.find_by({ name: 'Chandler Bing' })` will either return a user instance if that user can be found in the database **OR** it will return `nil` if that user is not found.
  * In the event that the user is not found, `user = User.find_by(username: params[:username])` will evaluate to `nil`.
  * Can we call `.authenticate` on `nil`? NO!! `NoMethodError (undefined method 'authenticate' for nil:NilClass)`
  * Ruby, however is **lazy**. If Ruby encounters `&&`, both sides of the statement must evaluate to true. If the statement on the left side evaluates to false, Ruby will **not even look at the statement on the right**. Let's see an example:

  ```ruby
  true && true
  #=> true

  true && false
  #=> false

  false && not_a_variable
  #=> false

  true && not_a_variable
  #=>NameError (undefined local variable or method `not_a_variable' for main:Object)
  ```
  * Let's take another look at our previous example:
```ruby
user = User.find_by(username: params[:username])
if !!user && user.authenticate(params[:password])
end
```
  * If `user` is `nil`, then `!!nil` will evaluate to `false` and **ruby will not even attempt to call .authenticate on user**. Without this catch, we will get a `NoMethodError (undefined method 'authenticate' for nil:NilClass)`.


---
* [According to the JWT Documentation](https://jwt.io/introduction/):
  Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:

  `Authorization: Bearer <token>`

* Knowing this, we can ensure our server is anticipating a token sent along in a header.

---

* The corresponding `fetch` request might look like this:

  ```javascript
  fetch('http://localhost:3000/api/v1/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  })
  ```

---

```ruby
def encode_token(payload)
  # should store secret in env variable
  JWT.encode(payload, 'my_s3cr3t')
end

def auth_header
  # headers: { Authorization: 'Bearer <token>' }
  request.headers['Authorization']
end

def decoded_token
  if auth_header
    token = auth_header.split(' ')[1]
    # header: { 'Authorization': 'Bearer <token>' }
    begin
      JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
    rescue JWT::DecodeError
      # instead of crashing and throwing a 500 error, rescue
      # recall that JWT decode returns an array of hashes, so make sure we return data of that same shape
      [{}]
    end
  end
end
```

* We can then complete our pipeline by automatically obtaining the user whenever an authorization header is present:

```ruby
class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, 'my_s3cr3t')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        [{}]
      end
    end
  end

  def current_user
    if decoded_token
      # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: 401 unless logged_in?
  end
end
```
* A few things to note about the code above:
  * `before_action :authorized` will call the authorized method **before anything else happens in our app**. This effectively lock down the entire application. It also means we need to add the following to our `AuthController`:

```ruby
class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
end
```
  * It wouldn't make sense to ask our users to be logged in before they log in. This circular logic will make it impossible for users to authenticate into the app.
  * `User.find_by({ name: 'Chandler Bing' })` will either return `nil` or a ruby instance. Ruby instances are truthy in Ruby, `nil` is falsey. Therefore, `!!user_instance #=>true` and `!!nil #=>false`

---

### External Resources
- [JWT Documentation](https://jwt.io/introduction/)
- [Figaro Gem for hiding secrets in your app](https://github.com/laserlemon/figaro#getting-started)

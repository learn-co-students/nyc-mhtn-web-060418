### JWT Auth in Redux and Rails

---

## Part 1: R A I L S and Encoding BCrypt

#### Creating our Server


#### Enter: JWT

---

* Token-based authentication is **stateless**. _We are not storing any information about a logged in user on the server_ (which also means we don't need a model or table for our user sessions). No stored information means your application can scale and add more machines as necessary without worrying about where a user is logged in. Instead, the client (browser) stores a token and sends that token along with every request. Instead of storing a plaintext username, or user_id, we can encrypt user data with JSON Web Tokens (JWT) and store that encrypted token client side.

---

### JWT Auth Flow:

![](https://i.stack.imgur.com/f2ZhM.png)

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

---

### Encoding and Decoding JWTs

* Add [`gem 'jwt'`](https://github.com/jwt/ruby-jwt) to your [Gemfile](/45-redux-auth/server/Gemfile)
* After calling `bundle install` we can explore some JWT methods by opening a `rails console`
  * `JWT.encode` takes up to three arguments: a payload to encode, an application secret of the user's choice, and an optional third that can be used to specify the hashing algorithm used. Typically, we don't need to show the third. This returns a JWT as a string.
  * `JWT.decode` takes three arguments as well: a JWT as a string, an application secret, and optionally a hashing algorithm.

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

---

### Building this functionality into our [`ApplicationController`](/45-redux-auth/server/app/controllers/application_controller.rb)

* Given that many different controllers will need to authenticate and authorize users––[`AuthController`](/45-redux-auth/server/app/controllers/api/v1/auth_controller.rb), [`UsersController`](/45-redux-auth/server/app/controllers/api/v1/users_controller.rb), etc––it makes sense to lift the functionality of encoding/decoding tokens to our top level [`ApplicationController`](/45-redux-auth/server/app/controllers/application_controller.rb). Recall that **all** controllers inherit from `ApplicationController`

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
    # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
    # [0] gives us the payload { "beef"=>"steak" }
  end
end
```

---
* [According to the JWT Documentation](https://jwt.io/introduction/):
  Whenever the user wants to access a protected route or resource, the user agent (browser in our case) should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:

  `Authorization: Bearer <token>`

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

* Knowing this, we can setup our server to anticipate a JWT sent along in request headers:

```ruby
class ApplicationController < ActionController::API
  def encode_token(payload)
    # payload => { beef: 'steak' }
    JWT.encode(payload, 'my_s3cr3t')
    # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
  end

  def auth_header
    # { 'Authorization': 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # headers: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
        # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
      rescue JWT::DecodeError
        nil
      end
    end
  end
```

---
* A few things to note about the code above:
  * The [`Begin/Rescue` syntax](https://ruby-doc.org/core-2.2.0/doc/syntax/exceptions_rdoc.html) allows us to **rescue** out of an exception in Ruby. Let's see an example in a `rails console`. In the event our server receives and attempts to decode an **invalid token**:

```ruby
# in rails console
> invalid_token = "nnnnnnnooooooootttttt.aaaaaaaaaaaavvvvvvaaaallliiiiidddddd.jjjjjjjwwwwwttttttt"

> JWT.decode(invalid_token, 'my_s3cr3t', true, algorithm: 'HS256')

Traceback (most recent call last):
        1: from (irb):6
JWT::DecodeError (Invalid segment encoding)
```

* In other words, if our server receives a bad token, this will raise an exception causing a [500 Internal Server Error](http://httpstatusrappers.com/500.html). We can account for this by **rescuing out of this exception**:

```ruby
# in rails console
> invalid_token = "nnnnnnnooooooootttttt.aaaaaaaaaaaavvvvvvaaaallliiiiidddddd.jjjjjjjwwwwwttttttt"

> begin JWT.decode(invalid_token, 'my_s3cr3t', true, algorithm: 'HS256')
  rescue JWT::DecodeError
    nil
>  end
 => nil
```

* Instead of crashing our server, we simply return `nil` and keep trucking along.

---

* We can then complete our controller by automatically obtaining the user whenever an authorization header is present:

```ruby
class ApplicationController < ActionController::API

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
        nil
      end
    end
  end

  def current_user
    if decoded_token
      # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
      # or nil if we can't decode the token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end
end
```

* Recall that a Ruby object/instance is 'truthy' so `!!user_instance #=> true` and nil is 'falsey': `!!nil #=> false`

---

* Finally, let's lock down our application to prevent unauthorized access:

```ruby
class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'my_s3cr3t')
  end

  def auth_header
    # Authorization: 'Bearer MYTOKEN'
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1] # header: {'Authorization': 'Bearer JWTTOKEN'}
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
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
  * `before_action :authorized` will call the authorized method **before anything else happens in our app**. This will effectively lock down the entire application. Next we'll build our `UsersController` and `AuthController` to allow signup/login.

---



   It also means we need to add the following to our [`AuthController`](/45-redux-auth/server/app/controllers/api/v1/auth_controller.rb):

```ruby
class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
end
```
  * It wouldn't make sense to ask our users to be logged in before they log in. This circular logic will make it impossible for users to authenticate into the app.
  * `User.find_by({ name: 'Chandler Bing' })` will either return `nil` or a ruby instance. Ruby instances are truthy in Ruby, `nil` is falsey. Therefore, `!!user_instance #=>true` and `!!nil #=>false`

---

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

### External Resources
- [JWT Documentation](https://jwt.io/introduction/)
- [JWT Ruby Gem on GitHub](https://github.com/jwt/ruby-jwt)
- [Figaro Gem for hiding secrets in your app](https://github.com/laserlemon/figaro#getting-started)
- [Ruby Begin Rescue Documentation](https://ruby-doc.org/core-2.2.0/doc/syntax/exceptions_rdoc.html)
- [HTTP Status Rappers](http://httpstatusrappers.com)

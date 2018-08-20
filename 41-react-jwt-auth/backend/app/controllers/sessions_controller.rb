class SessionsController < ApplicationController

  # sessions => we don't use sessions anymore
  # we make tokens the same way we make sessions
  # /sessions => /token => /login
  # CSRF => really long number
  def create
    # make a token in here
    @user = User.find_by(username: params["username"])

    if (@user && @user.authenticate(params["password"]))
      # payload = { "sub": @user.id }
      # token = JWT.encode payload, get_secret_key(), 'HS256'

      render json: {
        username: @user.username,
        id: @user.id,
        token: token_creator_maker()
      }
    else
      render json: {
        errors: "Those credentials don't match anything we have in our database"
      }, status: :unauthorized
    end
  end

end

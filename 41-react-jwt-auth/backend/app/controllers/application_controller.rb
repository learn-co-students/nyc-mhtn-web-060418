class ApplicationController < ActionController::API
  def get_secret_key
    # byebug
    # "super secret key key"
    ENV["SECRET_KEY"]
  end

  def payload
    { "sub": @user.id }
  end

  def token_creator_maker
    JWT.encode payload(), get_secret_key(), 'HS256'
  end

  def token_decoder
    begin
      JWT.decode request.headers['Authorization'], get_secret_key(), true, { algorithm: 'HS256' }
    rescue
      nil
    end
  end

  def is_valid_token? # token_authenticator, is_logged_in
    !!token_decoder()
  end

  # def authenticate(stuff_to_run, message)
  def authenticate #(message)
    if (!is_valid_token?())
      render json: {
        errors: 'Not authed!' #message
      }, status: :unauthorized
    end

    # if (is_valid_token?())
    #   stuff_to_run()
    # else
    #   render json: {
    #     errors: message
    #   }, status: :unauthorized
    # end
  end

  def authorize_user
    # if (User.find(token_decoder()[0]['sub']))
    # byebug
    if (params[:user_id] != token_decoder()[0]['sub'].to_s)
      render json: {
        errors: 'Not the right user!'
      }, status: :unauthorized
    end
  end

  # authorize_admin
  # authorize_moderators
end

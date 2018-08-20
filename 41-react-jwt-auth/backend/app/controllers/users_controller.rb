class UsersController < ApplicationController
  before_action :authenticate, only: [:users_snacks]
  before_action :authorize_user, only: [:users_snacks]
  # /api/v1/users
  # /users
  def index
    render json: User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  # username
  # password_thing => password_digest
  # HAS_AUTHENTICATED_PASSWORD ===> bycrpt => has_secure_password
  # hash (salt) + password => unique hash
  # different users, same password ==> but this results in a different unique hash
  # rainbow table => uses all the most common passwords
  def create
    # make a token in here
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]

    if (@user.save)
      # payload = { "sub": @user.id }
      # abstract key to environment variable
      # token = JWT.encode payload, get_secret_key(), 'HS256'

      render json: {
        username: @user.username,
        id: @user.id,
        token: token_creator_maker()
      }
    else
      render json: {
        errors: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  # /users/:id/snacks
  def users_snacks
    # if we want to do authorization, more ifs!
    # if (params[:user_id] == request.headers['Authorization'] && User.find(request.headers['Authorization'])) # we need to fix this error

    # This is authentication only.
    # begin
    #   token_info = JWT.decode request.headers['Authorization'], get_secret_key(), true, { algorithm: 'HS256' }
    # rescue
    #   token_info = nil
    # end

    # token_info = token_decoder()

    # if (is_valid_token?()) # second part, matching user
    # authenticate('Error')

    @user = User.find_by(id: params[:user_id])

    render json: @user.snacks
    # else
    #   render json: {
    #     errors: 'Not your snacks!'
    #   }, status: :unauthorized
    # end
  end

  # def
  #   authenticate()
  #
  #
  # end

end

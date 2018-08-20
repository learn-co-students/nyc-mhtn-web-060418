class UsersController < ApplicationController

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
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]

    if (@user.save)
      render json: {
        username: @user.username,
        id: @user.id
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
    if (params[:user_id] == request.headers['Authorization'] && User.find(request.headers['Authorization'])) # we need to fix this error
      @user = User.find_by(id: params[:user_id])

      render json: @user.snacks
    else
      render json: {
        errors: 'Not your snacks!'
      }, status: :unauthorized
    end
  end

end

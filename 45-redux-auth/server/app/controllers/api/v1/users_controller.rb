class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: %i[create]

  def profile
    current_user ? (render json: UserSerializer.new(current_user), status: :accepted) : (render json: { message: 'User not found' }, status: :not_found)
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end
end

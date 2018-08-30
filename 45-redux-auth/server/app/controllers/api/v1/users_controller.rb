class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    current_user ? (render json: UserSerializer.new(current_user), status: 200) : (render json: { message: 'User not found' }, status: 404)
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: @user }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end
end

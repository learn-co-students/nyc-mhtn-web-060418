class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: user_login_params[:username])
    if @user && @user.authenticate(user_login_params[:password])
      # encode token comes from applicaiton controller
      token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: token }, status: 202
    else
      render json: { message: 'Invalid username or password' }, status: 401
    end
  end

  private

  def user_login_params
    # params {user: {username: 'Chandler Bing', password: 'hi' }}
    params.require(:user).permit(:username, :password)
  end
end

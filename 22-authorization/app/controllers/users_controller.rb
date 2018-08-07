class UsersController < ApplicationController
  skip_before_action :authorized?, only: %i[new create]
  # GET /users/new
  def new
    @user = User.new
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      log_in_user(@user.id)
      redirect_to secrets_path, notice: 'User was successfully created.'
    else
      render :new
    end
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

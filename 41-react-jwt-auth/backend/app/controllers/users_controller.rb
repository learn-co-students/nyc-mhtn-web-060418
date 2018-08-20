class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end
  
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

  def users_snacks
    @user = User.find_by(id: params[:user_id])

    render json: @user.snacks
  end

end

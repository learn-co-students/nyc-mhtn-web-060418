class Api::V1::UsersController < ApplicationController
  def profile
    current_user ? (render json: { user: UserSerializer.new(current_user) }, status: 200) : (render json: { message: 'User not found' }, status: 404)

    # if current_user # current_user comes from application controller; it finds current user by id found in decoded JWT token
    #   render json: current_user, status: 200
    # else
    #   render json: { message: 'User not found' }, status: 404
    # end
  end
end

 class SnacksController < ApplicationController
   before_action :authenticate, only: [:index]

  # authenticate
  def index
    # if he has an id
    # submit a request with the information they got from login or register
    # Where can we put that information?
    # Idea 1: Header <=== use this!
    # Idea 2: Body <=== not a post, patch, etc. no body!!
    # byebug
    # try {
    #   // block of code
    # } catch(exception) {
    #
    # }
    # begin
    #   # unsafe code goes here
    # rescue #error goes here
    #   # catch
    # end

    # if (User.find(request.headers['Authorization'])) # we need to fix this error
    # authentication
    # if (is_valid_token?())
    #   render json: Snack.all
    # else
    #   render json: {
    #     errors: 'No snacks for you.'
    #   }, status: :unauthorized
    # end
    # authenticate('Error')
    # byebug
    render json: Snack.all
  end

end

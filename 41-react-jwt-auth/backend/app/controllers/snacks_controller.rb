 class SnacksController < ApplicationController

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
    if (User.find(request.headers['Authorization'])) # we need to fix this error
      render json: Snack.all
    else
      render json: {
        errors: 'No snacks for you.'
      }, status: :unauthorized
    end
  end

end

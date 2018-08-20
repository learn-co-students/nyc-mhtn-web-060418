 class SnacksController < ApplicationController

  def index
    render json: Snack.all
  end

end

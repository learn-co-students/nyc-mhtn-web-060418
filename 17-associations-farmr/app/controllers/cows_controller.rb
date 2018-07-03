class CowsController < ApplicationController
  before_action :fetch_cow, only: [:show]

  def new
    @cow = Cow.new
  end

  def show
    # call fetch_cow
    #code
  end

  def create
    @cow = Cow.new(cow_params)
    if @cow.save
      # /cows/:id
      redirect_to cow_path(@cow)
      # redirect_to @cow
    else
      redirect_to new_cow_path
    end
    #code
  end

  private
  def cow_params
    params.require(:cow).permit(:name, :spots, :farmer_id)
  end

  def fetch_cow
    @cow = Cow.find(params[:id])
  end
end

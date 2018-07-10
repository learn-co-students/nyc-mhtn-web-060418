class CowsController < ApplicationController
  before_action :fetch_cow, only: [:show]

  def new
    @cow = Cow.new(spots: rand(0..25))
  end

  def show
    # call fetch_cow
  end

  def create
    # /cows
    @cow = Cow.new(cow_params)
    if @cow.save
      # /cows/:id
      # redirect_to cow_path(@cow)
      redirect_to @cow
    else
      flash[:notice] = 'Failed to create cow'
      # redirect is a new get request, that calls the cows#new method. this method resets the @cow instance var
      # redirect_to new_cow_path
      # this will render our :new form without a page reload. this allows us to keep the state of our form; @cow does not change
      render :new

      # can also use a partial here
      # render partial: "form"
    end
  end

  private
  def cow_params
    params.require(:cow).permit(:name, :spots, :farmer_id)
  end

  def fetch_cow
    @cow = Cow.find(params[:id])
  end
end

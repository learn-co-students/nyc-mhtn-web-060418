class FiretrucksController < ApplicationController
  def index
    @firetrucks = Firetruck.all
  end

  def show

  end

  def new
    @firetruck = Firetruck.new
  end

  def create
    @firetruck = Firetruck.create(firetruck_params)
    redirect_to @firetruck
  end

  def edit

  end

  def update

  end

  def destroy

  end


  private

  def firetruck_params
    params.require(:firetruck).permit(:name)
  end
end

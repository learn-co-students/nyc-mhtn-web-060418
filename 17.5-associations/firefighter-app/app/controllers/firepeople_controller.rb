class FirepeopleController < ApplicationController
  def index

  end

  def show

  end

  def new
    @fireperson = Fireperson.new
  end

  def create
    @fireperson = Fireperson.create(fireman_params)
    redirect_to @fireperson
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private
  def fireman_params
    params.require(:fireperson).permit(:name, :firetruck_id)
  end
end

class OwnersController < ApplicationController

  before_action :fetch_owner, only: [:edit, :show, :update, :destroy]

  def index
    @owners = Owner.all
  end

  def new
    @owner = Owner.new
  end

  def show
  end

  def create
    @owner = Owner.new(owner_params)
    if @owner.valid?
      @owner.save
      redirect_to @owner
    else
      render :new
    end
  end

  def destroy
  end

  private
  def owner_params
    params.require(:owner).permit(:name)
  end

  def fetch_owner
    @owner = Owner.find(params[:id])
  end
end

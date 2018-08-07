class PetsController < ApplicationController

  before_action :fetch_pet, only: [:edit, :show, :update, :destroy]
  before_action :all_owners, only: [:new, :create, :edit, :update]

  def index
    @pets = Pet.all
  end

  def new
    @pet = Pet.new
  end

  def show
  end

  def create
    @pet = Pet.new(pet_params)
    if @pet.valid?
      @pet.save
      redirect_to @pet
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @pet.update(edit_pet_params)
      redirect_to @pet
    else
      render :edit
    end
  end

  def destroy
  end

  private

  def all_owners
    @owners = Owner.all
  end

  def pet_params
    params.require(:pet).permit(:name, :species, :owner_id)
  end

  def edit_pet_params
    params.require(:pet).permit(:name, :owner_id)
  end

  def fetch_pet
    @pet = Pet.find(params[:id])
  end
end

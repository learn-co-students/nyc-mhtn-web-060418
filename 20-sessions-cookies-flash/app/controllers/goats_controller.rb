class GoatsController < ApplicationController
  before_action :set_goat, only: [:show, :edit, :update, :destroy]

  # GET /goats
  def index
    @goats = Goat.all.sort_by(&:lifetime_headbutts)
  end

  # GET /goats/1
  def show
  end

  # GET /goats/new
  def new
    @goat = Goat.new
  end

  # GET /goats/1/edit
  def edit
  end

  # POST /goats
  def create
    @goat = Goat.new(goat_params)

    if @goat.save
      redirect_to @goat, notice: 'Goat was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /goats/1
  def update
    if @goat.update(goat_params)
      redirect_to @goat, notice: 'Goat was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /goats/1
  def destroy
    @goat.destroy
    redirect_to goats_url, notice: 'Goat was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_goat
      @goat = Goat.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def goat_params
      params.require(:goat).permit(:name, :lifetime_headbutts)
    end
end

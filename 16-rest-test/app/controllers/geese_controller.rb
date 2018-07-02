class GeeseController < ApplicationController
  before_action :find_goose, only: %i[edit show update destroy]

  def index
    @geese = Goose.all
  end

  def new
    @goose = Goose.new
  end

  def edit; end

  def destroy
    @goose.destroy
    redirect_to geese_path
  end

  private

  def find_goose
    @goose = Goose.find(params[:id])
  end
end

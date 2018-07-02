class PlatypodesController < ApplicationController

  before_action :fetch_platypus, only: [:show, :edit]

  def index
    @platypodes = Platypus.all
  end

  def show

  end

  def new
    @platypus = Platypus.new
  end

  def edit
    @platypus.name = "graham"
  end

  private
  def fetch_platypus
    @platypus = Platypus.find(params[:id])
  end

end

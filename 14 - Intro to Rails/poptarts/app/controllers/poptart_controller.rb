class PoptartController < ApplicationController
  def index
    @poptarts = Poptart.all
  end

  def show
  end

  def special
  end

  def wolfgangspecial

  end
end

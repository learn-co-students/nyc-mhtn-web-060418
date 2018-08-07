class ApplicationController < ActionController::Base

  before_action :get_cart, :get_flash


  private

  def get_cart
    byebug
    @cart = session[:cart] || []
  end

  def get_flash
    @flash = flash[:goat]
  end


  def add_to_cart(goat_id)
    get_cart
    @cart << goat_id
    session[:cart] = @cart
  end

end

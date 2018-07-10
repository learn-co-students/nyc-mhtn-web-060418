class CartListItemsController < ApplicationController

  def create
    add_to_cart(params[:goat_id])
    @goat = Goat.find(params[:goat_id])
    flash[:goat] = "#{ @goat.name } was added to your cart" 
    redirect_to goats_url
  end


end
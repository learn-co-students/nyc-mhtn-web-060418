Rails.application.routes.draw do
  resources :goats
  resources :cart_list_items, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

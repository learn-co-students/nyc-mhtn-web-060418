Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :platypodes, only: [:index, :show, :new, :edit, :create]

  # get "platypodes", to: "platypodes#index"
  # get "platypodes/:id", to: "platypodes#show", as: "platypus"

end





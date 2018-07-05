Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :elevators, only: [] do
    resources :localizations, only: [:new, :create, :show]
  end

  # resources :languages, only: [:new, :create]

end

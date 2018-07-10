Rails.application.routes.draw do
  resources :secrets
  resources :users, only: %i[new create]
  resources :sessions, only: %i[new create]
  delete '/logout', to: 'sessions#destroy', as: 'logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

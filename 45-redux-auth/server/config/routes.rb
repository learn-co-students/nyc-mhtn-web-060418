Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index create]
      post '/login', to: 'auth#create'
    end
  end
end

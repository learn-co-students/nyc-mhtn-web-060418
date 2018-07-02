Rails.application.routes.draw do
  get '/poptart/index', to: "poptart#index"
  get 'poptart/show'
  get 'poptart/beef', to: "poptart#wolfgangspecial"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

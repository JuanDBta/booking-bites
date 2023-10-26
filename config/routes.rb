Rails.application.routes.draw do
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '*path', to: 'root#index', constraints: -> (req) { !req.xhr? && req.format.html? }
  namespace :api do
    resources :restaurants, only: [:new, :create, :index] do
      resources :sections, only: [:new, :create]
    end
    resources :sections, only: [:index, :show] do
      resources :reservations, only: [:new, :create]
    end
    resources :reservations, only: [:index, :show]
    resources :users 
  end
end

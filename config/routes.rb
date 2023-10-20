Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  

  resources :restaurants, only: [:new, :create] do
    resources :sections, only: [:new, :create]
  end

  resources :sections, only: [:index, :show] do
    resources :reservations, only: [:new, :create]
  end

  resources :reservations, only: [:index, :show]
  resources :users 
end
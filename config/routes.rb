Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :series
    resources :episodes
    resources :genres
    resources :favorites, only: [:index,:create,:destroy]
    resources :reviews, only: [:create,:update,:destroy]
    resources :users, only:[:create,:update,:destroy]
    resources :profiles
    get 'search/' => 'series#search', as: :search_series
    post 'current_profile/' => 'users#set_cp', as: :set_current_profile
  end
  root 'static_pages#root'
end

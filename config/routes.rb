Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'homes#index'
  devise_for :users, :controllers => {:registrations => "registrations"}

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :companies, only: [:show]
    end
  end

end

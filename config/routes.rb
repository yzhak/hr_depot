Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'homes#index'
  devise_for :users, skip: [:registrations]
  as :user do
    get "/sign_in" => "devise/sessions#new" # custom path to login/sign_in
    get "/sign_up" => "devise/registrations#new", as: "new_user_registration" # custom path to sign_up/registration
    get 'users/edit' => 'devise/registrations#edit', :as => 'edit_user_registration'
    put 'users' => 'devise/registrations#update', :as => 'user_registration'
  end

  get '/employees/new', to: 'homes#index'
  get '/employees/search', to: 'homes#index'
  get '/employees/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :companies, only: [:show]
    end
  end

end

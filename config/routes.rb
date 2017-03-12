Rails.application.routes.draw do
  resources :posts do
    member do 
      get :edit_ready
      get :edit_inline
      get :edit_cleanup
    end
  end

  resource :traffic, only: :show do
    member do
      get :retrieve_latest
      get :show_wrong_interval
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

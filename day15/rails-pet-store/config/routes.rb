Rails.application.routes.draw do
  resources :pets
  root 'welcome#index'
  get 'list' => 'welcome#pets'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

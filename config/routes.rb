# frozen_string_literal: true

Rails.application.routes.draw do
  get 'checkout', to: 'checkout#index'
  get 'checkout/complete'
  post 'shopping_cart/add'
  resources :products
  root to: 'products#index'
end

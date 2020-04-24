# frozen_string_literal: true

Rails.application.routes.draw do
  post 'shopping_cart/add'
  resources :products
  root to: 'products#index'
end

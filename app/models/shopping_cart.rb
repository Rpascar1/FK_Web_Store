# frozen_string_literal: true

class ShoppingCart < ApplicationRecord
  belongs_to :customer
  has_many :shopping_cart_items
end

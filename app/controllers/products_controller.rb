# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @all_products = Product.all.as_json(methods: :price)
  end
end

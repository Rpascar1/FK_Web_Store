class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image_url
      t.text :description
      t.integer :price_in_cents

      t.timestamps
    end
  end
end

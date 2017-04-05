class CreateFavoritesAndReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :user_id, index:true, null: false
      t.integer :serie_id, index: true
      t.timestamps
    end

    create_table :reviews do |t|
      t.integer :user_id, null: false, index: true
      t.integer :serie_id, null: false, index: true
      t.integer :rating, null: false, index: true 
      t.text :body
      t.timestamps
    end
  end
end

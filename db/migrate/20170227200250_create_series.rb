class CreateSeries < ActiveRecord::Migration[5.0]
  def change
    create_table :series do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :rating, default: 0
      t.timestamps 
    end
  end
end

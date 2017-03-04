class CreateGenres < ActiveRecord::Migration[5.0]
  def change
    create_table :genres do |t|
      t.string :title, null: false, index: true
      t.timestamps
    end
    add_column :series, :genre_id, :integer
  end
end

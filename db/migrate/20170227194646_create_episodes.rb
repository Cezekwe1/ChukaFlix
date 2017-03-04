class CreateEpisodes < ActiveRecord::Migration[5.0]
  def change
    create_table :episodes do |t|
      t.integer :serie_id, null: false, index: true
      t.string :title, null: false, index: true
      t.text :description, null: false
      t.string :video_url, null: false
      t.timestamps
    end
  end
end

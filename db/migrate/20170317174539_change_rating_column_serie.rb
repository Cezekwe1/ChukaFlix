class ChangeRatingColumnSerie < ActiveRecord::Migration[5.0]
  def change
    rename_column :series, :rating, :avg_rating
  end
end

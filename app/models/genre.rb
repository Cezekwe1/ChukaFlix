class Genre < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  has_many :series,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: 'Serie'
    
    has_many(
        :series_with_rating,
        -> { joins(:reviews).select('series.*, AVG(rating) AS avg_rating').group('series.id') },
        # -> {
          # self
          #   .joins("LEFT OUTER JOIN reviews ON reviews.serie_id = series.id")
          #   .group('series.id')
          #   .select('series.*, AVG(reviews.rating) AS avg_rating')
        # },
        through: :series_genres,
        source: :serie
      )
   has_many :favorites, through: :series, source: :favorites

end

class Serie < ApplicationRecord
  has_attached_file :image, styles: { medium: "226.23x127.25", thumb: "85x50" }, default_url: "Luther.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :title, :description, :year, presence: true
  has_many :episodes, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :reviews, dependent: :destroy
  belongs_to :genre

  def make_episode(title,description,url)
    Episode.create!(title: title, description: description, serie_id: self.id, video_url: url)
  end

  def add_genre(title)
    genre = Genre.find_by_title(title)
    self.genre_id = genre.id
    self.save
  end

  def self.all_ratings
    ratings = {}
    self
      .select('series.*, AVG(reviews.rating) AS avg_rating')
      .joins("LEFT OUTER JOIN reviews ON reviews.serie_id = series.id")
      .group('series.id')
      .each do |s|
        ratings[s.id] = s.avg_rating
      end
    ratings
  end

  def get_avg_rating
    reviews.select('AVG(rating) as avg_rating').group(:serie_id)
  end

  def user_rating(user)
    reviews.select('rating').where('profile_id = ?', user.id)
  end

end

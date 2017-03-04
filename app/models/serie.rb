class Serie < ApplicationRecord
  validates :title, :description, presence: true

  has_many :episodes
  belongs_to :genre

  def make_episode(title,description,url)
    Episode.create!(title: title, description: description, serie_id: self.id, video_url: url)
  end

  def add_genre(title)
    genre = Genre.find_by_title(title)
    self.genre_id = genre.id
    self.save
  end

end

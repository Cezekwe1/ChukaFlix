class Episode < ActiveRecord::Base
  has_attached_file :image, styles: { large: "", medium: "300x300>", thumb: "100x100>" }, default_url: "Luther.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :serie_id, :title, :description, :video_url, presence: true
  validates :video_url, uniqueness: true

  belongs_to :serie
end

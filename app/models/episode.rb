class Episode < ApplicationRecord
  validates :serie_id, :title, :description, presence: true 
  has_one :serie
end

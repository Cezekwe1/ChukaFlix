class Genre < ApplicationRecord

  validates :title, presence: true
  has_many :series,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: 'Serie'


end

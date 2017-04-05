class Profile < ApplicationRecord


has_many :favorites
has_many :favorited_series, through: :favorites, source: :serie



end

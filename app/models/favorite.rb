class Favorite < ApplicationRecord
  validates :serie_id, :profile_id, presence: true
  validates :profile_id, uniqueness: { scope: :serie_id }

  belongs_to :serie
  belongs_to :profile
end

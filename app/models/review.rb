class Review < ApplicationRecord

validates :serie, :profile, presence: true
validates :profile_id, uniqueness: { scope: :serie_id }

  belongs_to :serie
  belongs_to :profile

end

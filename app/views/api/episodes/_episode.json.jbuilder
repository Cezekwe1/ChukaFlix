json.extract! episode, :id, :title, :serie_id, :video_url, :episode_number, :serie_id, :description
json.image_url asset_path(episode.image.url(:medium))

json.extract! serie, :id, :title, :description, :avg_rating, :genre ,:movie, :reviews, :year
json.episodes serie.episodes do |episode|
  json.partial! 'api/episodes/episode.json.jbuilder', episode: episode
end
json.image_url asset_path(serie.image.url(:medium))
json.avg_rating @all_ratings && @all_ratings[serie.id]

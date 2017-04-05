@series.each do |serie|
 json.extract! serie, :title
 serie.episodes.each do |episode|
  json.extract! episode, :title
 end
end

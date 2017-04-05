json.extract! profile, :id, :name

json.favorites do
  json.series profile.favorited_series do |serie|
    json.partial! 'api/series/serie.json.jbuilder', serie: serie
  end
end

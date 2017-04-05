json.extract! genre, :id, :title
json.series genre.series do |serie|
  json.partial! 'api/series/serie', serie: serie
end

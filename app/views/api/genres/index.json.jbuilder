 @genres.each do |genre|
   json.extract! genre,:title, :id
   genre.series.each do |serie|
     json.extract! serie, :title
   end
end

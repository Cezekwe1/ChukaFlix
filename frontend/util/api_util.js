export const fetchSeries = () =>{
  return $.get({
    url: '/api/series'
  });

}

export const getGenres = () =>{
  return $.get({
    url: '/api/genres'
  });

}

export const fetchSeries = () =>{
  return $.get({
    url: '/api/series'
  });

}


export const getGenre = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/genres/${id}`
  });
};

 export const getGenres = () =>{
  return $.get({
    url: '/api/genres'
  });

}

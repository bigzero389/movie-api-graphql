import fetch from "node-fetch"

// const API_URL = "https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=5";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  let prefix = "?";
  if(limit > 0) {
    REQUEST_URL += prefix + `limit=${limit}`;
    console.log("RQST_URL :: " + REQUEST_URL)
    prefix = "&";
  }
  if(rating > 0) {
    REQUEST_URL += prefix + `minimum_rating=${rating}`;
    console.log("RQST_URL :: " + REQUEST_URL)
    prefix = "&"
  }
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
}

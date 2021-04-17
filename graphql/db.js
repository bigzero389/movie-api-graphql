import fetch from "node-fetch"
import axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`; 

// const API_URL = "https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=5";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  //let REQUEST_URL = API_URL;
  let REQUEST_URL = LIST_MOVIES_URL;
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

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};

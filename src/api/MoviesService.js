import axios from "axios";
const API_KEY = "c6971de83b8ae71035fe3f16ecd9cb32";
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}

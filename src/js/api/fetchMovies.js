import axios from 'axios';
import { API_KEY } from '../common/keys';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/day';
const TRENDING_TV_URL = 'https://api.themoviedb.org/3/trending/tv/day';
const MOVIE_ID_URL = 'https://api.themoviedb.org/3/movie/';
const TOP_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming';
const FILTER_URL = 'https://api.themoviedb.org/3/discover/movie';
const GENRES_LIST = 'https://api.themoviedb.org/3/genre';

export async function fetchTrendingMovies(page) {
  try {
    const { data } = await axios.get(
      `${TRENDING_URL}?api_key=${API_KEY}&page=${page}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovies(query, page) {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&include_adult=false`,
      {
        params: {
          query: query.length ? query : null,
          page,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesByID(id) {
  try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchGenresList() {
  try {
    const { data } = await axios.get(
      `${GENRES_LIST}/movie/list?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTv(page) {
  try {
    const { data } = await axios.get(
      `${TRENDING_TV_URL}?api_key=${API_KEY}&language=en-US&${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTop(page) {
  try {
    const { data } = await axios.get(
      `${TOP_URL}?api_key=${API_KEY}&language=en-US&${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUpcoming(page) {
  try {
    const { data } = await axios.get(`${UPCOMING_URL}?api_key=${API_KEY}&language=en-US&page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
  } 
}

export async function fetchTrailer(id) {
  try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    return data;
    // return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFiltered(genre, year) {
  try {
    const { data } = await axios.get(`${FILTER_URL}?api_key=${API_KEY}&with_genres=28&primary_release_year=${year}&language=en-US`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
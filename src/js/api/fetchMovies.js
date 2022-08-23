import axios from "axios";
import { API_KEY } from '../common/keys';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/day';

// export async function fetchMovies(query, page) {
//     const response = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&language=en-US&include_adult=false`, {
//         params: {
//         query: query.length ? query : null,
//         page,
//       },
//     },
//     );
//     return response.data;
// }

// export async function fetchTrendingMovies(page) {
//   const response = await axios.get(`${TRENDING_URL}?api_key=${API_KEY}&page=${page}`);
//   return response.data;
// }
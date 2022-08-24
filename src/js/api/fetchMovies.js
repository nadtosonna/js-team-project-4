import axios from "axios";
import { API_KEY } from '../common/keys';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/day';

export async function fetchTrendingMovies(page) {
    const response = await axios.get(`${TRENDING_URL}?api_key=${API_KEY}&page=${page}`);
    console.log(response.data);
  return response.data;
}

// export async function fetchMovies(query, page) {
//     const response = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&language=en-US&include_adult=false`, {
//         params: {
//         query: query.length ? query : null,
//         page,
//       },
//     },
//     );
//     console.log(response.data);
//     return response.data;
// }


// export default class trendingMovies {
//     constructor() {
//         this.page = 1;
//         this.result;
//     }
//     async fetchTrendingMovies() {
//         const response = await axios.get(`${TRENDING_URL}?api_key=${API_KEY}&page=${page}`);
//         console.log(response);
//         return response;
//     }
//     refreshPage() {
//         this.page = 1;
//     }
//     increasePage() {
//         this.page += 1;
//     }
//     decreasePage() {
//         this.page += 1;
//     }
// }
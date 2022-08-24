import { fetchTrendingMovies } from "./api/fetchMovies";
import { showLoader, hideLoader } from "./loader";

let page = 1;

async function getTrendingMovies(page) {
    try {
        showLoader();
        const { results } = await fetchTrendingMovies(page);
        console.log(results);
        hideLoader();
    } catch (error) {
        console.log(error);
    }
}

getTrendingMovies(page);


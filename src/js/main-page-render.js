import { fetchTrendingMovies } from "./api/fetchMovies";
import { showLoader, hideLoader } from "./loader";

let page = 1;

async function getTrendingMovies(page) {
    try {
        showLoader();
        const { results } = await fetchTrendingMovies(page);
        console.log(results);
        results.forEach(element => {
            console.log(element.title);
        });
        hideLoader();
    } catch (error) {
        console.log(error);
    }
}

getTrendingMovies(page);



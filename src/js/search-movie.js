import { fetchMovies } from "./api/fetchMovies";
import { showLoader, hideLoader } from "./loader";
import getRefs from './common/refs';
import { showLoader } from './loader';

const DEBOUNCE_DELAY = 600;
const refs = getRefs();
const searchForm = getRefs().searchForm;

searchForm.addEventListener('input', debounce(searchMovies, DEBOUNCE_DELAY));

function debounce (callback, delay) {
  let timeout;
  
  return function () {
    let originalArguments = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(this, originalArguments), delay);
  }
}

async function searchMovies(event) {
    const searchQuery = event.target.value.trim();
    console.log(searchQuery);

    if (searchQuery === '') return;

    try {
        showLoader();
        const { results, total_results: totalResults } = await fetchMovies(
        searchQuery,
    );
        hideLoader();

        if (totalResults === 0) {
            alert('No matches found! Please enter correct movie name!');
            return;
        }

    } catch (error) {
        console.log(error);
    }
}



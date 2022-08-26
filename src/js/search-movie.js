import { fetchMovies } from './api/fetchMovies';
import { showLoader, hideLoader } from './loader';
import getRefs from './common/refs';
import { showLoader, hideLoader } from './loader';
import { getCardTemplate } from './get-templates';
import { getGenresList } from './main-page-render';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notiflixSettings } from './common/notiflix-settings';

const DEBOUNCE_DELAY = 300;
const { moviesGallery } = getRefs();

const debounce = require('lodash.debounce');
export function addSearchListener() {
  const { searchForm } = getRefs();
  searchForm.addEventListener('input', debounce(searchMovies, DEBOUNCE_DELAY));
}

async function searchMovies(event) {
  const searchQuery = event.target.value.trim();

  if (searchQuery === '') return;

  try {
    showLoader();
    const { results, total_results: totalResults } = await fetchMovies(
      searchQuery
    );
    const genres = await getGenresList();
    hideLoader();

    if (totalResults === 0) {
      Notify.failure(
        'Search result was not successful. Enter the correct movie name!',
        notiflixSettings
      );
      return;
    }
    let searchUI = '';
    results.forEach(film => {
      searchUI += getCardTemplate(film, genres);
    });
    moviesGallery.innerHTML = searchUI;
  } catch (error) {
    console.log(error);
  }
}

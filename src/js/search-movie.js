import { fetchMovies } from './api/fetchMovies';
import { showLoader, hideLoader } from './loader';
import getRefs from './common/refs';
import { showLoader, hideLoader } from './loader';
import { renderGalleryFromTemplate } from './get-templates';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notiflixSettings } from './common/notiflix-settings';
import { goHomePage } from './make-header';
import { pagination, paginationSettings } from './pagination';

const DEBOUNCE_DELAY = 500;
const {
  trendingBtn,
  topRatedBtn,
  upcomingBtn,
  moviesGallery,
} = getRefs();

const debounce = require('lodash.debounce');
export function addSearchListener() {
  const { searchFormInput } = getRefs();
  searchFormInput.addEventListener(
    'input',
    debounce(searchMovies, DEBOUNCE_DELAY)
  );
}

async function searchMovies(event) {
  const searchQuery = event.target.value.trim();

  if (searchQuery === '') {
    // goHomePage();
    return;
  }

  try {
    const { results, total_results: totalItems } = await fetchMovies(
      searchQuery,
      paginationSettings.startPage,
    );

    if (totalItems === 0) {
      Notify.failure(
        'Wrong Title! Enter the correct movie name!',
        notiflixSettings
      );
      return;
    }
    paginationSettings.pagination.reset(totalItems);
    paginationSettings.pagination.searchQuery = searchQuery;
    paginationSettings.searchType = 'search';

    topRatedBtn.classList.remove('btn-tab-active');
    trendingBtn.classList.remove('btn-tab-active');
    upcomingBtn.classList.remove('btn-tab-active');

    renderGalleryFromTemplate(results);
  } catch (error) {
    Notify.failure(
        'OOPS! Something went wrong!',
        notiflixSettings
      );
  }
}
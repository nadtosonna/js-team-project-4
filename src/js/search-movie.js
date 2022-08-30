import { fetchMovies } from './api/fetchMovies';
import { showLoader, hideLoader } from './loader';
import getRefs from './common/refs';
import { showLoader, hideLoader } from './loader';
import { getCardTemplate, renderGalleryFromTemplate } from './get-templates';
import { getGenresList } from './main-page-render';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notiflixSettings } from './common/notiflix-settings';
import { goHomePage } from './make-header';
import { pagination, paginationSettings } from './pagination';

const DEBOUNCE_DELAY = 300;
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
  // event.preventDefault();
  const searchQuery = event.target.value.trim();
  console.log(searchQuery);

  if (searchQuery === '') {
    // goHomePage();
    return;
  }

  try {
    const { results, total_results: totalItems } = await fetchMovies(
      searchQuery,
      paginationSettings.startPage,
    );
    // const genres = await getGenresList();

    if (totalItems === 0) {
      Notify.failure(
        'Search result was not successful. Enter the correct movie name!',
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
    // const pageMovies = await fetchMovies(page);
    // console.log(pageMovies)
    // let totalPagesMovies = pageMovies.total_pages;
    // console.log(totalPagesMovies)
    // moviesGallery.innerHTML = '';
    // pagination.reset(totalPagesMovies);

    // let searchUI = '';
    // results.forEach(film => {
    //   searchUI += getCardTemplate(film, genres);
    // });
    // moviesGallery.innerHTML = searchUI;
  } catch (error) {
    console.log(error);
  }
}

import { fetchGenresList, fetchTrendingMovies } from './api/fetchMovies';
import { showLoader, hideLoader } from './loader';
import getRefs from './common/refs';
import { getCardTemplate } from './get-templates';

export let page = 1;

const { moviesGallery } = getRefs();

export async function getGenresList() {
  const { genres } = await fetchGenresList();
  return genres.reduce((acc, { id, name: genre }) => {
    acc[id] = genre;
    return acc;
  }, {});
}

export async function getTrendingMovies(page) {
  try {
    showLoader();
    const { results } = await fetchTrendingMovies(page);
    const genres = await getGenresList();

    let html = '';
    results.forEach(film => {
      html += getCardTemplate(film, genres);
    });
    moviesGallery.innerHTML = html;

    hideLoader();
  } catch (error) {
    console.log(error);
  }
}

getTrendingMovies(page);

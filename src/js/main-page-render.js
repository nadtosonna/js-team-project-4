import { fetchGenresList, fetchTrendingMovies } from './api/fetchMovies';
import { showLoader, hideLoader } from './loader';
import getRefs from './common/refs';
import { getCardTemplate } from './get-templates';
import { pagination } from './pagination';


export let page = 1;

const { moviesGallery, trendingBtn } = getRefs();

export async function getGenresList() {
  const { genres } = await fetchGenresList();
  return genres.reduce((acc, { id, name: genre }) => {
    acc[id] = genre;
    return acc;
  }, {});
}

export async function getTrendingMovies(page) {
  trendingBtn.classList.add('btn-tab-active');
  try {
    const { results } = await fetchTrendingMovies(page);
     const pageMovies = await fetchTrendingMovies(page);
     const genres = await getGenresList();

    let totalPagesMovies = pageMovies.total_pages;
    console.log(totalPagesMovies)
    moviesGallery.innerHTML = '';
    pagination.reset(totalPagesMovies);

    let html = '';
    results.forEach(film => {
      html += getCardTemplate(film, genres);
    });
    moviesGallery.innerHTML = html;

  } catch (error) {
    console.log(error);
  }
}

// getTrendingMovies(page);

import { fetchGenresList, fetchTrendingMovies } from './api/fetchMovies';
import { showLoader, hideLoader } from './loader';
import getRefs from './common/refs';
import { getCardTemplate, renderGalleryFromTemplate } from './get-templates';
import { initPagination, paginationSettings } from './pagination';

// export let page = 1;

const { moviesGallery, trendingBtn } = getRefs();

export async function getGenresList() {
  const { genres } = await fetchGenresList();
  return genres.reduce((acc, { id, name: genre }) => {
    acc[id] = genre;
    return acc;
  }, {});
}

export async function getTrendingMovies(renderPage) {
  trendingBtn.classList.add('btn-tab-active');
  try {
    const {
      results,
      page,
      total_results: totalItems,
    } = await fetchTrendingMovies(renderPage);

    initPagination({
      page,
      itemsPerPage: results.length,
      totalItems,
    });

    paginationSettings.searchType = 'main';
    paginationSettings.totalItemsHome = totalItems;

    // console.log(results);
    // console.log(renderGalleryFromTemplate);

    renderGalleryFromTemplate(results);

    //  const pageMovies = await fetchTrendingMovies(page);
    //  const genres = await getGenresList();

    // let totalPagesMovies = pageMovies.total_pages;
    // console.log(totalPagesMovies)
    // moviesGallery.innerHTML = '';
    // pagination.reset(totalPagesMovies);

    // let html = '';
    // results.forEach(film => {
    //   html += getCardTemplate(film, genres);
    // });
    // moviesGallery.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

getTrendingMovies(paginationSettings.startPage);

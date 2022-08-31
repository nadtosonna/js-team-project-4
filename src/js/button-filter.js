import getRefs from './common/refs';
import {
  fetchTop,
  fetchUpcoming,
  fetchTrendingMovies,
} from './api/fetchMovies';
import { getCardTemplate, getGenresNames, renderGalleryFromTemplate } from './get-templates';
import { getGenresList, getTrendingMovies} from './main-page-render';
import { pagination, paginationSettings } from './pagination';
import { async } from '@firebase/util';

const {
  trendingBtn,
  topRatedBtn,
  upcomingBtn,
} = getRefs();

trendingBtn.addEventListener('click', onTrendingClick);
topRatedBtn.addEventListener('click', onTopClick);
upcomingBtn.addEventListener('click', onUpcomingClick);

export async function onTopClick() {
  topRatedBtn.classList.add('btn-tab-active');
  trendingBtn.classList.remove('btn-tab-active');
  upcomingBtn.classList.remove('btn-tab-active');
  
  try {
    const { results, total_results: totalItems } = await fetchTop(paginationSettings.startPage,);
    paginationSettings.searchType = 'top';
    paginationSettings.pagination.reset(totalItems);
    renderGalleryFromTemplate(results);
  } catch (error) {

  }
}

export async function onUpcomingClick() {
  upcomingBtn.classList.add('btn-tab-active');
  trendingBtn.classList.remove('btn-tab-active');
  topRatedBtn.classList.remove('btn-tab-active');

  try {
  const { results, total_results: totalItems } = await fetchUpcoming(paginationSettings.startPage,);
    paginationSettings.searchType = 'upcoming';
    paginationSettings.pagination.reset(totalItems);
    renderGalleryFromTemplate(results);
  } catch (error) {
    console.log(error);
  }
}

export async function onTrendingClick() {
  trendingBtn.classList.add('btn-tab-active');
  upcomingBtn.classList.remove('btn-tab-active');
  topRatedBtn.classList.remove('btn-tab-active');
  
  const { results, total_results: totalItems } = await fetchTrendingMovies(paginationSettings.startPage,);
  paginationSettings.searchType = 'main';
  paginationSettings.pagination.reset(paginationSettings.totalItemsHome);

  getTrendingMovies(paginationSettings.startPage);
}

export function clearBtnFilter() {
  upcomingBtn.classList.remove('btn-tab-active');
  topRatedBtn.classList.remove('btn-tab-active');
}

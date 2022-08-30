import getRefs from './common/refs';
import {
  fetchTop,
  fetchUpcoming,
  fetchTrendingMovies,
} from './api/fetchMovies';
import { getCardTemplate, getGenresNames, renderGalleryFromTemplate } from './get-templates';
import { getGenresList, getTrendingMovies, page } from './main-page-render';
import { pagination, paginationSettings } from './pagination';
import { async } from '@firebase/util';

const {
  trendingBtn,
  topRatedBtn,
  upcomingBtn,
  moviesGallery,
  searchForm,
  yearFilter,
  genreFilter,
  filterInput,
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
  
  paginationSettings.searchType = 'main';
  paginationSettings.pagination.reset(totalItems);

  renderGalleryFromTemplate(results);
}

// export async function onTopClick() {
   


//   try {
//     const { results, total_results: totalResults } = await fetchTop();
//     const genres = await getGenresList();
      
//       const pageMovies = await fetchTop(page);
//       let totalPagesMovies = pageMovies.total_pages;
//       console.log(totalPagesMovies)
//       moviesGallery.innerHTML = '';
//       pagination.reset(totalPagesMovies);


//     let topUI = '';
//     results.forEach(film => {
//       topUI += getCardTemplate(film, genres);
//     });

//       moviesGallery.innerHTML = topUI;
   
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function onUpcomingClick() {
//     upcomingBtn.classList.add('btn-tab-active');
//     trendingBtn.classList.remove('btn-tab-active');
//     topRatedBtn.classList.remove('btn-tab-active');


//   try {
//     const { results, total_results: totalResults } = await fetchUpcoming();
//     const genres = await getGenresList();
      
//       const pageMovies = await fetchUpcoming(page);

//     let totalPagesMovies = pageMovies.total_pages;
//     console.log(totalPagesMovies);
//     moviesGallery.innerHTML = '';
//     pagination.reset(totalPagesMovies);

//     let upcomingUI = '';
//     results.forEach(film => {
//       upcomingUI += getCardTemplate(film, genres);
//     });
//     moviesGallery.innerHTML = upcomingUI;
//   } catch (error) {
//     console.log(error);
//   }
// }


// export async function onTrendingClick() {
//     trendingBtn.classList.add('btn-tab-active');
//     upcomingBtn.classList.remove('btn-tab-active');
//     topRatedBtn.classList.remove('btn-tab-active');
  
//     const pageMovies = await fetchTrendingMovies(page);
//     let totalPagesMovies = pageMovies.total_pages;
//     console.log(totalPagesMovies)
//     moviesGallery.innerHTML = '';
//     pagination.reset(totalPagesMovies);


//   getTrendingMovies(page);
// }


export function clearBtnFilter() {
  upcomingBtn.classList.remove('btn-tab-active');
  topRatedBtn.classList.remove('btn-tab-active');
}

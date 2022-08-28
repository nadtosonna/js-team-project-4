import getRefs from './common/refs';
import { fetchTv, fetchTop, fetchUpcoming, fetchFiltered } from "./api/fetchMovies";
import { getCardTemplate } from './get-templates';
import { getGenresList, getTrendingMovies, page } from './main-page-render';

const { trendingBtn, tvBtn, topRatedBtn, upcomingBtn, moviesGallery, searchForm, yearFilter, genreFilter, filterInput } = getRefs();

chooseYear();

let genrePicked = '';
let yearPicked = '';

trendingBtn.addEventListener('click', onTrendingClick);
tvBtn.addEventListener('click', onTvClick);
topRatedBtn.addEventListener('click', onTopClick);
upcomingBtn.addEventListener('click', onUpcomingClick);

async function onTvClick() {
    tvBtn.classList.add('btn-tab-active');
    trendingBtn.classList.remove('btn-tab-active');
    upcomingBtn.classList.remove('btn-tab-active');
    topRatedBtn.classList.remove('btn-tab-active');

    try {
    const { results, total_results: totalResults } = await fetchTv();
    const genres = await getGenresList();

    let tvUI = '';
    results.forEach(tv => {
      tvUI += getCardTemplate(tv, genres);
    });
    moviesGallery.innerHTML = tvUI;

    } catch (error) {
        console.log(error);
    }
}
async function onTopClick() {
    topRatedBtn.classList.add('btn-tab-active');
    trendingBtn.classList.remove('btn-tab-active');
    upcomingBtn.classList.remove('btn-tab-active');
    tvBtn.classList.remove('btn-tab-active');

    try {
    const { results, total_results: totalResults } = await fetchTop();
    const genres = await getGenresList();

    let topUI = '';
    results.forEach(film => {
      topUI += getCardTemplate(film, genres);
    });
    moviesGallery.innerHTML = topUI;

    } catch (error) {
        console.log(error);
    }
}

async function onUpcomingClick() {
    upcomingBtn.classList.add('btn-tab-active');
    trendingBtn.classList.remove('btn-tab-active');
    topRatedBtn.classList.remove('btn-tab-active');
    tvBtn.classList.remove('btn-tab-active');

    try {
    const { results, total_results: totalResults } = await fetchUpcoming();
    const genres = await getGenresList();

    let upcomingUI = '';
    results.forEach(film => {
      upcomingUI += getCardTemplate(film, genres);
    });
    moviesGallery.innerHTML = upcomingUI;

    } catch (error) {
        console.log(error);
    }
}

async function onTrendingClick() {
    trendingBtn.classList.add('btn-tab-active');
    upcomingBtn.classList.remove('btn-tab-active');
    topRatedBtn.classList.remove('btn-tab-active');
    tvBtn.classList.remove('btn-tab-active');

    getTrendingMovies(page);
}

function chooseYear() {
  let startYear = 1950;
  let endYear = new Date().getFullYear();
  let years = [];

  yearFilter.insertAdjacentHTML(
    'beforeend',
    '<option value="">Choose year</option>',
  );
  for (let i = endYear; i > startYear; i--) {
    years.push(`<option value="${i}">${i}</option>`);
  }
  yearFilter.insertAdjacentHTML('beforeend', years);
}

filterInput.forEach(item => {
  item.addEventListener('change', event => {
    yearPicked = yearFilter.value;
    genrePicked = genreFilter.value;
      console.log(genrePicked);
      console.log(yearPicked);
      renderFilteredList(yearFilter.value);
  });
});

async function renderFilteredList(genre, year) {
    try {
        // const array = await getGenresList();
        // console.log(array);
    const { results, total_results: totalResults } = await fetchFiltered(genre, year);
    
        console.log(results);
    // let filteredUI = '';
    //     results.forEach(film => {
    //   filteredUI += getCardTemplate(film);
    // });
    // moviesGallery.innerHTML = filteredUI;

    } catch (error) {
        console.log(error);
    }
}
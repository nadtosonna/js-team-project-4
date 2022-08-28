import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import getRefs from './common/refs';
import { fetchTrendingMovies, fetchMovies } from './api/fetchMovies';
import { getGenresList, getTrendingMovies } from './main-page-render.js';
import { getCardTemplate } from './get-templates.js';


const container = document.getElementById('tui-pagination-container');
const options = {
    totalItems: 0,
    itemsPerPage: 10,
    visiblePages: 5,
    page: 1,
    template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
}


const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage();
console.log(page);

const { moviesGallery } = getRefs();

async function getPages(page) {
    try {
        const pageMovies = await fetchTrendingMovies(page);
        const { results } = await fetchTrendingMovies(page);

        const getPagetoMovies  =  pageMovies.results;
        let totalPagesMovies = pageMovies.total_pages;

console.log(getPagetoMovies);
        console.log(totalPagesMovies);
      
        if (totalPagesMovies.length === 0) {
            container.classList.add('is-hidden');
            return;
        }

        pagination.reset(totalPagesMovies);
        getCardTemplate(results);
        getTrendingMovies(page);
     
        } catch (error) {
        console.log(error);
    }
}
getPages(page);

 async function  movePagination(event) {
      try {
        // const currentPage = event.page;
         const pageMovies = await fetchTrendingMovies(page);
        pageMovies.page = event.page;
      
        console.log(pageMovies.page)
    const currentPage = pageMovies.page;
    console.log(currentPage);

        const { results } = await fetchTrendingMovies(currentPage);
        console.log(results);

        getPages(currentPage);
        
        // moviesGallery.innerHTML = '';
        getCardTemplate(results);
        // getTrendingMovies(page);
    } catch (error) {
        console.log(error);
    }
}


pagination.on('afterMove', movePagination);



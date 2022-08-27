import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import getRefs from './common/refs';
import { fetchTrendingMovies } from './api/fetchMovies';
import { getGenresList, getTrendingMovies } from './main-page-render.js';
import { getCardTemplate } from './get-templates.js';


const container = document.getElementById('tui-pagination-container');
const options = {
    totalItems: 0,
    itemsPerPage: 10,
    visiblePages: 5,
    page,
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
        const { total_pages } = await fetchTrendingMovies(page);
         console.log(total_pages);
        if (total_pages.length === 0) {
            container.classList.add('is-hidden');
            return;
        }

        pagination.reset(total_pages);

          const { results } = await fetchTrendingMovies(page);
    const genres = await getGenresList();
   
        let html = '';
        results.forEach(film => {
        html += getCardTemplate(film, genres);
    });
        moviesGallery.innerHTML = html;
         container.classList.remove('is-hidden');
        } catch (error) {
        console.log(error);
    }
}
getPages(page);

const callPage = event => {
    const currentPage = event.page;
    console.log(currentPage);
    
    const page = getPages(currentPage);

    // const getMarket = getCardTemplate({});
    // moviesGallery.insertAdjacentHTML('beforeend', getMarket);
    // console.log(getMarket)



    //  const { results } = fetchTrendingMovies(page);
    // const genres = getGenresList();
    // console.log(results);
    // console.log(genres);
    //     let html = '';
    // results.forEach(film => {
    //     html += getCardTemplate(film, genres);
    // });
    // moviesGallery.innerHTML = html;
   
    }
  
pagination.on('afterMove', callPage);



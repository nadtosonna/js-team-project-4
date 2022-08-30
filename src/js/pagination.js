import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import getRefs from './common/refs';
import { fetchTrendingMovies, fetchMovies, fetchTop, fetchUpcoming } from './api/fetchMovies';
import { getGenresList, getTrendingMovies } from './main-page-render.js';
import { getCardTemplate, renderGalleryFromTemplate } from './get-templates.js';
import { onTopClick, onUpcomingClick, onTrendingClick } from './button-filter.js';


const container = document.getElementById('tui-pagination-container');
export const paginationSettings = {
    startPage: 1,
    searchType: null,
    pagination: null,
    totalItemsHome: null,
}
export const initPagination = ({ page, itemsPerPage, totalItems }) => {
    const options = {
        totalItems,
        itemsPerPage,
        page,
        visiblePages: 5,
        centerAlign: true,
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
    paginationSettings.pagination = pagination;

    pagination.on('afterMove', async ({ page }) => {
        if (paginationSettings.searchType === 'main') {
            try {
                const { results } = await fetchTrendingMovies(page);
                renderGalleryFromTemplate(results);
                window.scrollTo(pageYOffset, 0);
            } catch (error) {
                console.log(error);
            }
        } else if (paginationSettings.searchType === 'search') {
            try {
                const { results } = await fetchMovies(page);
                renderGalleryFromTemplate(results);
                window.scrollTo(pageYOffset, 0);
            } catch (error) {
                console.log(error);
            }
        } else if (paginationSettings.searchType === 'top') {
            try {
                const { results } = await fetchTop(page);
                renderGalleryFromTemplate(results);
                window.scrollTo(pageYOffset, 0);
            } catch (error) {
                console.log(error);
            }
        } else if (paginationSettings.searchType === 'upcoming') {
            try {
                const { results } = await fetchUpcoming(page);
                renderGalleryFromTemplate(results);
                window.scrollTo(pageYOffset, 0);
            } catch (error) {
                console.log(error);
            }
        }
    });
    return pagination;
}

// const page = pagination.getCurrentPage();

// const { moviesGallery } = getRefs();

//  async function getPages(page) {

//     try {
//         // const pageMovies = await fetchTop(page);
//          const pageMovies = await fetchTrendingMovies(page);
           
//         let totalPagesMovies = pageMovies.total_pages;
//         console.log(totalPagesMovies)
      
//         // if (totalPagesMovies.length === 0) {
//         //     container.classList.add('is-hidden');
//         //     return;
//         // }
//         // if (topRatedBtn.classList.contains('btn-tab-active') === false) {
//             moviesGallery.innerHTML = '';
//             pagination.reset(totalPagesMovies);
        
//         // onTopClick(page);
//         // onUpcomingClick()
//         onTrendingClick(page)
    
//         // getTrendingMovies(page);
        
        
//         } catch (error) {
//             console.log(error);
//         }
//     }

// getPages(page);

//  async function  movePagination(event) {
//       try {
//         //   const pageMovies = await fetchTop(page);
//           const pageMovies = await fetchTrendingMovies(page);
          
//     pageMovies.page = event.page;
//           const currentPage = pageMovies.page;
//           console.log(currentPage)

//             moviesGallery.innerHTML = '';
//         // onTopClick(currentPage);
//         // onUpcomingClick(currentPage)
//         // onTrendingClick(currentPage)
          
//           getTrendingMovies(currentPage);
          
//           scrollTo();
//       }
//       catch (error) {
//         console.log(error);
//     }
// }

// pagination.on('afterMove', movePagination);


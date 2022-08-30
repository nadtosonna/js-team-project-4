import getRefs from './common/refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { fetchTrendingMovies, fetchMovies, fetchTop, fetchUpcoming } from './api/fetchMovies';
import { renderGalleryFromTemplate } from './get-templates.js';

const { paginationContainer } = getRefs();

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

    const pagination = new Pagination(paginationContainer, options);
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
                const { results } = await fetchMovies(paginationSettings.pagination.searchQuery, page);
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

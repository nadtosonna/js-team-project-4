import getRefs from './common/refs';
import { monitorAuthState } from './firebase';
import search from '../images/header/search.svg';
import { getTrendingMovies } from './main-page-render.js';
import { addSearchListener } from './search-movie.js';
import { addEmptyTemplate } from './make-empty-template-my-library';
import { initPagination, paginationSettings } from './pagination';


console.log(addEmptyTemplate);

const debounce = require('lodash.debounce');

const {
  header,
  headerContainer,
  home,
  logoLink,
  logoIcon,
  library,
  moviesGalleryContainer,
  emptyCard,
  btnFilter,
  container,
} = getRefs();

addHeaderSearchForm();
chandeLogoLink();
addSearchListener();

library.addEventListener('click', onClickLibrary);
home.addEventListener('click', onClickHome);
logoLink.addEventListener('click', onClickLogoLink);
window.addEventListener('resize', debounce(chandeLogoLink, 250));

export function onClickLibrary(e) {
  e.preventDefault();

  if (library.classList.contains('current')) {
    return;
  }

  monitorAuthState();
  library.classList.add('current');
  home.classList.remove('current');
  header.classList.remove('home-header-bg');
  header.classList.add('library-header-bg');
  btnFilter.classList.add('visually-hidden');
  container.classList.add('is-hidden');
  // addEmptyTemplate();
  addHeaderBtnList();
  addLogoHover();
  addLogoActive();
}

function onClickHome(e) {
  e.preventDefault();
  if (home.classList.contains('current')) {
    return;
  }
  goHomePage(e);
}

function onClickLogoLink(e) {
  moviesGalleryContainer.classList.remove('visually-hidden');
  emptyCard.innerHTML = '';
  e.preventDefault();
  if (home.classList.contains('current')) {
    return;
  }
  goHomePage();
  logoLink.classList.remove('logo-link-hover');
  logoIcon.classList.remove('logo-link-hover');
}

function searchMovies(e) {
  console.log(e.currentTarget.elements.search.value);
}

function addHeaderSearchForm() {
  const { searchForm, headerBtnList } = getRefs();

  if (headerBtnList) {
    headerBtnList.remove();
  }
  if (searchForm) {
    return;
  }
  headerContainer.insertAdjacentHTML('beforeend', markupHeaderSearchForm());
}

function addHeaderBtnList() {
  const searchForm = getRefs().searchForm;
  const headerBtnList = getRefs().headerBtnList;

  if (searchForm) {
    searchForm.remove();
  }

  if (headerBtnList) {
    return;
  }
  headerContainer.insertAdjacentHTML('beforeend', markupHeaderBtnList());
}

function markupHeaderSearchForm() {
  return `
    <label class="search-form">
    <input class="search-form__input" type="text" name="search" placeholder = 'Movie search' />
     <img
        class="search-icon"
        src="${search}"
        width="12"
        height="12"
        alt="logo icon"
      />
    </label>
   `;
}

function markupHeaderBtnList() {
  return `<div class="header-btn-list">
  <button class='header-btn' type="button" data-name="Watched">Watched</button>
  <button class='header-btn' type="button" data-name="queue">queue</button>
</div>`;
}

export function goHomePage() {
  library.classList.remove('current');
  home.classList.add('current');
  header.classList.add('home-header-bg');
  header.classList.remove('library-header-bg');
  moviesGalleryContainer.classList.remove('visually-hidden');
  btnFilter.classList.remove('visually-hidden');
  container.classList.remove('is-hidden');
  emptyCard.innerHTML = '';

  addHeaderSearchForm();
  const searchForm = getRefs().searchForm;
  searchForm.addEventListener('input', searchMovies);
  removeLogoHover();
  removeLogoActive();
  getTrendingMovies(paginationSettings.startPage);
  addSearchListener();
}

function chandeLogoLink() {
  const logoTitle = document.querySelector('.lodo-title');

  if (window.innerWidth < 768 && logoTitle) {
    logoTitle.remove();
  }

  if (logoTitle) {
    return;
  }

  if (window.innerWidth >= 768) {
    logoLink.insertAdjacentHTML(
      'beforeend',
      '<p class = "lodo-title"  data-id="logo-item" >Filmoteka</p>'
    );
    return;
  }
}

function addLogoHover() {
  logoLink.addEventListener('mouseover', onMouseover);
  logoLink.addEventListener('mouseout', onMouseout);
}

function removeLogoHover() {
  logoLink.removeEventListener('mouseover', onMouseover);
  logoLink.removeEventListener('mouseout', onMouseout);
}

function addLogoActive() {
  logoLink.addEventListener('touchstart', onTouchStart);
  logoLink.addEventListener('touchend', onTouchend);
}

function removeLogoActive() {
  logoLink.removeEventListener('touchstart', onTouchStart);
  logoLink.removeEventListener('touchend', onTouchend);
}

function onMouseover() {
  logoLink.classList.add('logo-link-hover');
  logoIcon.classList.add('logo-link-hover');
}
function onMouseout() {
  logoLink.classList.remove('logo-link-hover');
  logoIcon.classList.remove('logo-link-hover');
}

function onTouchStart() {
  logoLink.classList.add('logo-link-active');
  logoIcon.classList.add('logo-link-active');
}
function onTouchend() {
  logoLink.classList.remove('logo-link-active');
  logoIcon.classList.remove('logo-link-active');
}

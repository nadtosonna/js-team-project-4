import getRefs from './common/refs';
import search from '../images/header/search.svg';
const refs = getRefs();

addHeaderSearchForm();
const searchForm = getRefs().searchForm;
searchForm.addEventListener('input', searchMovies);

function searchMovies(e) {
  console.log(e.currentTarget.elements.search.value);
}

function addHeaderSearchForm() {
  const searchForm = getRefs().searchForm;
  const headerBtnList = getRefs().headerBtnList;

  if (headerBtnList) {
    headerBtnList.remove();
  }
  if (searchForm) {
    return;
  }
  refs.headerContainer.insertAdjacentHTML(
    'beforeend',
    markupHeaderSearchForm()
  );
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
  refs.headerContainer.insertAdjacentHTML('beforeend', markupHeaderBtnList());
}

function markupHeaderSearchForm() {
  return `
    <form class="search-form" data-id = "search-form">
    <label class="search-form__field">
    <input class="search-form__input" type="text" name="search" placeholder = 'Movie search' />
    </label>
    <img
        class="search-icon"
        src="${search}"
        width="12"
        height="12"
        alt="logo icon"
      />`;
}

const markupHeaderBtnList = () => {
  return `<div class="header-btn-list">
  <button class='header-btn' type="button" data-name="Watched">Watched</button>
  <button class='header-btn' type="button" data-name="queue">queue</button>
</div>`;
};

const onClickLibrary = e => {
  refs.library.classList.add('current');
  refs.home.classList.remove('current');
  refs.header.classList.remove('home-header-bg');
  refs.header.classList.add('library-header-bg');
  addHeaderBtnList();
  searchForm.addEventListener('input', searchMovies);
};

const onClickHome = e => {
  refs.library.classList.remove('current');
  refs.home.classList.add('current');
  refs.header.classList.add('home-header-bg');
  refs.header.classList.remove('library-header-bg');

  addHeaderSearchForm();
  const searchForm = getRefs().searchForm;
  searchForm.addEventListener('input', searchMovies);
};

refs.library.addEventListener('click', onClickLibrary);

refs.home.addEventListener('click', onClickHome);

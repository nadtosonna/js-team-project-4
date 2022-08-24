import getRefs from './common/refs';
import search from '../images/header/search.svg';
const refs = getRefs();

const addHeaderSearchForm = () => {
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
};
const addHeaderBtnList = () => {
  const searchForm = getRefs().searchForm;
  const headerBtnList = getRefs().headerBtnList;
  if (searchForm) {
    searchForm.remove();
  }

  if (headerBtnList) {
    return;
  }
  refs.headerContainer.insertAdjacentHTML('beforeend', markupHeaderBtnList());
};

const markupHeaderSearchForm = () => {
  return `
    <form class="search-form">
    <label class="search-form__field">
    <input class="search-form__input" type="text" name="name" placeholder = 'Movie search' />
    </label>
    <button class="search-form__btn" type="submit"> <img
    class="logo-icon"
    src="${search}"
    width="12"
    height="12"
    alt="logo icon"
    /></button>
    </form>
  `;
};

const markupHeaderBtnList = () => {
  return `<div class="header-btn-list">
  <button class='header-btn' type="button" data-name="Watched">Watched</button>
  <button class='header-btn' type="button" data-name="queue">queue</button>
</div>`;
};

addHeaderSearchForm();
refs.library.addEventListener('click', e => {
  refs.library.classList.add('current');
  refs.home.classList.remove('current');
  refs.header.classList.remove('home-header-bg');
  refs.header.classList.add('library-header-bg');
  addHeaderBtnList();
});

refs.home.addEventListener('click', e => {
  refs.library.classList.remove('current');
  refs.home.classList.add('current');
  refs.header.classList.add('home-header-bg');
  refs.header.classList.remove('library-header-bg');
  addHeaderSearchForm();
});

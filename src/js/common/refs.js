export default function getRefs() {
  return {
    loader: document.querySelector('.loader'),
    preloader: document.querySelector('.preloader'),
    moviesGallery: document.querySelector('.movies-gallery__list'),
    header: document.querySelector('.header'),
    headerContainer: document.querySelector('.header-container'),
    library: document.querySelector('[data-name="library"]'),
    home: document.querySelector('[data-name="Home"]'),
    searchForm: document.querySelector('.search-form'),
    headerBtnList: document.querySelector('.header-btn-list'),
    logoLink: document.querySelector('.logo-link'),
    modal: document.querySelector('.modal'),
    closeModalBtn: document.querySelector('.modal-btn'),
    watchedBtn: document.querySelector('.modal-btn__addwatch'),
    queueBtn: document.querySelector('.modal-btn__accent'),
    queueBtn: document.querySelector('.modal-btn__addqueue'),
    backToTopBtn: document.querySelector('.back-to-top-btn'),
    emptyCard: document.querySelector('.empty-card'),
    moviesGalleryContainer: document.querySelector('.movies-gallery'),
    logoIcon: document.querySelector('.logo-icon'),
    backdrop: document.querySelector('.backdrop'),
  };
}

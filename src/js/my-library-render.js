import getRefs from './common/refs';
import { markupEmptyTemplate } from './make-empty-template-my-library';

const { moviesGallery, moviesGalleryContainer, library } = getRefs();

function reduceWatcedFilms(array) {
  return array.reduce((acc, film) => acc + getCardTemplate(film), '');
}

function renderWatchedFilms(array) {
  return moviesGallery.insertAdjacentHTML(
    'afterbegin',
    reduceWatcedFilms(array)
  );
}

library.addEventListener('click', onMyLibraryClick);

function onMyLibraryClick() {
  const watchedBtn = document.querySelector('[data-name=Watched]');
  const queueBtn = document.querySelector('[data-name=queue]');

  watchedBtn.classList.add('accent-btn');
  queueBtn.classList.remove('accent-btn');

  moviesGallery.innerHTML = '';
  const myLibraryQueue = JSON.parse(localStorage.getItem('movies-in-queue'));
  const myLibraryWatched = JSON.parse(localStorage.getItem('movies-watched'));

  if (myLibraryWatched) {
    moviesGalleryContainer.classList.remove('visually-hidden');
    renderWatchedFilms(myLibraryWatched);
  } else {
    moviesGallery.insertAdjacentHTML('beforeend', markupEmptyTemplate());
  }

  watchedBtn.addEventListener('click', onWatchedBtnClick => {
    queueBtn.classList.remove('accent-btn');
    watchedBtn.classList.add('accent-btn');
    moviesGallery.innerHTML = '';
    if (myLibraryWatched) {
      renderWatchedFilms(myLibraryWatched);
    } else {
      moviesGallery.insertAdjacentHTML('beforeend', markupEmptyTemplate());
    }
  });

  queueBtn.addEventListener('click', onQueueBtnClick => {
    watchedBtn.classList.remove('accent-btn');
    queueBtn.classList.add('accent-btn');
    moviesGallery.innerHTML = '';
    if (myLibraryQueue) {
      renderWatchedFilms(myLibraryQueue);
    } else {
      moviesGallery.insertAdjacentHTML('beforeend', markupEmptyTemplate());
    }
  });
}

const getCardTemplate = movie => {
  const {
    original_name,
    original_title,
    poster_path,
    vote_average,
    release_date,
    genres,
    id,
  } = movie;

  return `
    <li class='movies-gallery__item' data-id="${id}">
      <div class='movies-gallery__img'>
        <img
          src='${
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'images/no-poster-available.jpeg'
          }'
          alt='${original_title || original_name}'
          loading='lazy'
          width='395'
        />
      </div>
      <div class='movies-gallery__text'>
        <p class='movies-gallery__title'>${original_title || original_name}</p>
        <p class='movies-gallery__genre ellipsis'>
          ${genres} | ${release_date?.split('-')[0] || '2077'}
        </p>
        <span class='movies-gallery__rating'>${Number(vote_average).toFixed(
          1
        )}</span>
      </div>
    </li>
  `;
};

import getRefs from './common/refs';
import { markupEmptyTemplate, addEmptyTemplate } from './make-empty-template-my-library'

const { moviesGallery, moviesGalleryContainer, library } = getRefs();

function reduceWatcedFilms(array) {
    return array.reduce((acc, film) => acc + getCardTemplate(film), "");
}

function renderWatcedFilms(array) {
    return moviesGallery.insertAdjacentHTML("afterbegin", reduceWatcedFilms(array));
}

library.addEventListener("click", onMyLibraryClick);

function onMyLibraryClick() {
    moviesGallery.innerHTML = "";
    const myLibraryQueue = JSON.parse(localStorage.getItem("movies-in-queue"));
    
    if (myLibraryQueue) {
        moviesGalleryContainer.classList.remove('visually-hidden');
        // addEmptyTemplate("movies-in-queue")
        renderWatcedFilms(myLibraryQueue);
    } else {
        moviesGallery.insertAdjacentHTML('beforeend', markupEmptyTemplate());
    }

    const queueBtn = document.querySelector("[data-name=queue]")
        .addEventListener("click", onQueueBtnClick => {
            moviesGallery.innerHTML = "";
            if (myLibraryQueue) {
                // addEmptyTemplate("movies-in-queue")
                renderWatcedFilms(myLibraryQueue);
            } else {
                moviesGallery.insertAdjacentHTML('beforeend', markupEmptyTemplate());
            }
        });

    const watchedBtn = document.querySelector("[data-name=Watched]")
        .addEventListener("click", onWatchedBtnClick => {
            moviesGallery.innerHTML = "";
            if (myLibraryQueue) {
                // addEmptyTemplate("movies-in-queue")
                renderWatcedFilms(myLibraryQueue);
            } else {
                moviesGallery.insertAdjacentHTML('beforeend', markupEmptyTemplate());;
            }
        });
}

const getCardTemplate = (movie) => {
  const {
    original_name,
    original_title,
    poster_path,
    vote_average,
    release_date,
    genres
  } = movie;

  return `
    <li class='movies-gallery__item'>
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
        <span class='movies-gallery__rating'>${Number(vote_average).toFixed(1)}</span>
      </div>
    </li>
  `;
};
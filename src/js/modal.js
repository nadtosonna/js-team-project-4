import getRefs from './common/refs';
import { getModalTemplate } from './get-templates';
import { load, save } from './local-storage';
import { QUEUE_STORAGE_KEY, WATCHED_STORAGE_KEY } from './common/keys';

const { modal, moviesGallery, backdropREF } = getRefs();

moviesGallery.addEventListener('click', actionWithModalWindow);

function actionWithModalWindow(e) {
  const movieNode = e.target.closest('.movies-gallery__item');

  if (!movieNode) return;

  const movieData = JSON.parse(movieNode.getAttribute('data-movie'));
  const existsInLS = isExistsInLS(movieData.id);
  // const filmExistsInLS = isFilmExistsInLS(movieData.id);

  modal.classList.remove('is-hidden');
  modal.innerHTML = getModalTemplate(movieData, existsInLS);

  const queueBtn = document.querySelector('.modal-btn__accent');
  const watchBtn = document.querySelector('.modal-btn__addwatch');
  const closeBtn = document.querySelector('.modal-close');

  window.addEventListener('keydown', closeByEscape);
  closeBtn.addEventListener('click', closeModal);
  queueBtn.addEventListener('click', () => {
    existsInLS ? removeFromQueue(movieData) : addToQueue(movieData);
  });
  watchBtn.addEventListener('click', () => {
    existsInLS ? removeFromWatched(movieData) : addToWatched(movieData);
  });
}

// Button Queue
function getQueueButton(text) {
  const btn = document.createElement('button');
  btn.classList.add('modal-btn__accent');
  btn.innerHTML = text;
  return btn;
}

const addToQueue = movieData => {
  document.querySelector('.modal-btn__accent').remove();
  document
    .querySelector('.modal-block__btn')
    .append(getQueueButton('remove from queue'));
  document
    .querySelector('.modal-btn__accent')
    .addEventListener('click', () => removeFromQueue(movieData));

  let data = load(QUEUE_STORAGE_KEY);
  if (!data) {
    data = [];
  }
  data.push(movieData);
  save(QUEUE_STORAGE_KEY, data);
};

const removeFromQueue = movieData => {
  document.querySelector('.modal-btn__accent').remove();
  document
    .querySelector('.modal-block__btn')
    .append(getQueueButton('add to queue'));
  document
    .querySelector('.modal-btn__accent')
    .addEventListener('click', () => addToQueue(movieData));

  const data = load(QUEUE_STORAGE_KEY);
  save(
    QUEUE_STORAGE_KEY,
    data.filter(movie => movie.id !== movieData.id)
  );
};

const isExistsInLS = id => {
  let data = load(QUEUE_STORAGE_KEY);
  let dataWatched = load(WATCHED_STORAGE_KEY);
  if (data && dataWatched) {
    return Boolean(data.find(movie => movie.id === id));
  }
  return false;
};

// Button Watched
function getWatchedButton(text) {
  const btn = document.createElement('button');
  btn.classList.add('modal-btn__addwatch');
  btn.innerHTML = text;
  return btn;
}
const addToWatched = movieData => {
  document.querySelector('.modal-btn__addwatch').remove();
  document
    .querySelector('.modal-block__btn')
    .appendChild(getWatchedButton('remove from watched'));
  document
    .querySelector('.modal-btn__addwatch')
    .addEventListener('click', () => removeFromWatched(movieData));

  let data = load(WATCHED_STORAGE_KEY);
  if (!data) {
    data = [];
  }
  data.push(movieData);
  save(WATCHED_STORAGE_KEY, data);
};

const removeFromWatched = movieData => {
  document.querySelector('.modal-btn__addwatch').remove();
  document
    .querySelector('.modal-block__btn')
    .append(getWatchedButton('add to watched'));
  document
    .querySelector('.modal-btn__addwatch')
    .addEventListener('click', () => addToWatched(movieData));

  const data = load(WATCHED_STORAGE_KEY);
  save(
    WATCHED_STORAGE_KEY,
    data.filter(movie => movie.id !== movieData.id)
  );
};

// Close Modal By Escape
const closeByEscape = e => {
  if (e.code === 'Escape') {
    modal.classList.add('is-hidden');
    window.removeEventListener('keydown', closeByEscape);
  }
};

const closeModal = () => {
  modal.classList.add('is-hidden');
  window.removeEventListener('keydown', closeByEscape);
  document
    .querySelector('.modal-close')
    .removeEventListener('click', closeModal);
};

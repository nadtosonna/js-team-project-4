import getRefs from './common/refs';
import { getModalTemplate } from './get-templates';
import { load, save } from './local-storage';
import { QUEUE_STORAGE_KEY, WATCHED_STORAGE_KEY } from './common/keys';

const { modal, moviesGallery, backdrop } = getRefs();

// moviesGallery.addEventListener('click', actionWithModalWindow);

const MovieAction = {
  Queue: {
    storageKey: QUEUE_STORAGE_KEY,
    querySelector: '.modal-btn__addqueue',
    addText: 'add to queue',
    removeText: 'remove from queue',
  },
  Watch: {
    storageKey: WATCHED_STORAGE_KEY,
    querySelector: '.modal-btn__addwatch',
    addText: 'add to watched',
    removeText: 'remove from watched',
  },
};

export function actionWithModalWindow(movieData) {
  //   const movieNode = e.target.closest('.movies-gallery__item');

  //   if (!movieNode) return;

  //   backdrop.classList.remove('backdrop-modal-hidden');
  //   const movieData = JSON.parse(movieNode.getAttribute('data-movie'));

  const existsInQueueLS = isExistsInLS(QUEUE_STORAGE_KEY, movieData.id);
  const existsInWatchedLS = isExistsInLS(WATCHED_STORAGE_KEY, movieData.id);

  //
  //   modal.innerHTML = getModalTemplate(
  //     movieData,
  //
  //   );
  backdrop.innerHTML = getModalTemplate(
    movieData,
    existsInQueueLS,
    existsInWatchedLS
  );
  backdrop.classList.remove('backdrop-modal-hidden');
  const queueBtn = document.querySelector('.modal-btn__addqueue');
  const watchBtn = document.querySelector('.modal-btn__addwatch');
  const closeBtn = document.querySelector('.modal-close');
  const container = document.querySelector('.modal-block__btn');

  const queueAction = MovieAction.Queue;
  const watchAction = MovieAction.Watch;

  if (existsInQueueLS) {
    queueBtn.classList.add('modal-btn__accent');
  }

  if (existsInWatchedLS) {
    watchBtn.classList.add('modal-btn__accent');
  }

  container.addEventListener('click', onActiveClick);
  window.addEventListener('keydown', closeByEscape);
  closeBtn.addEventListener('click', closeModal);
  queueBtn.addEventListener('click', () => {
    existsInQueueLS
      ? removeFromAction(queueAction, movieData)
      : addToAction(queueAction, movieData);
  });
  watchBtn.addEventListener('click', () => {
    existsInWatchedLS
      ? removeFromAction(watchAction, movieData)
      : addToAction(watchAction, movieData);
  });
}

const updateQueryText = (selector, text) => {
  const querySelector = document.querySelector(selector);
  querySelector.innerHTML = text;
  return querySelector;
};

const addToAction = (action, movieData) => {
  const querySelector = action.querySelector;
  const storageKey = action.storageKey;
  const removeText = action.removeText;

  updateQueryText(querySelector, removeText);
  document
    .querySelector(querySelector)
    .addEventListener('click', () => removeFromAction(action, movieData));

  let data = load(storageKey);
  if (!data) {
    data = [];
  }
  data.push(movieData);
  save(storageKey, data);
};

const removeFromAction = (action, movieData) => {
  const querySelector = action.querySelector;
  const storageKey = action.storageKey;
  const addText = action.addText;

  updateQueryText(querySelector, addText);
  document
    .querySelector(querySelector)
    .addEventListener('click', () => addToAction(action, movieData));

  const data = load(storageKey);
  save(
    storageKey,
    data.filter(movie => movie.id !== movieData.id)
  );
};

const isExistsInLS = (storageKey, id) => {
  const data = load(storageKey);
  if (data) {
    return Boolean(data.find(movie => movie.id === id));
  }
};

// Close Modal By Escape
const closeByEscape = e => {
  if (e.code === 'Escape') {
    backdrop.classList.add('backdrop-modal-hidden');
    window.removeEventListener('keydown', closeByEscape);
  }
};

const closeModal = () => {
  backdrop.classList.add('backdrop-modal-hidden');
  window.removeEventListener('keydown', closeByEscape);
  document
    .querySelector('.modal-close')
    .removeEventListener('click', closeModal);
};

// Change color on Click
const onActiveClick = e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  e.target.classList.toggle('modal-btn__accent');
};

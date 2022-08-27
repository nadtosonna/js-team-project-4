import getRefs from './common/refs';
import { getModalTemplate } from './get-templates';
import { closeModalWindow } from './close-modal';
import { load, save } from './local-storage';
import { QUEUE_STORAGE_KEY } from './common/keys';

const { modal, moviesGallery, closeModalBtn, queueBtn } = getRefs();

function addToQueue(movieData) {
  console.log('add');
  let data = load(QUEUE_STORAGE_KEY);
  if (!data) {
    data = [];
  }
  data.push(movieData);
  save(QUEUE_STORAGE_KEY, data);
}

function removeFromQueue(movieData) {}

moviesGallery.addEventListener('click', e => {
  const movieNode = e.target.closest('.movies-gallery__item');

  if (!movieNode) return;

  const movieData = JSON.parse(movieNode.getAttribute('data-movie'));

  modal.classList.remove('is-hidden');
  modal.innerHTML = getModalTemplate(movieData);

  closeModalBtn.addEventListener('click', closeModalWindow);
  queueBtn.addEventListener('click', () => addToQueue(movieData));
  console.log('end');
});

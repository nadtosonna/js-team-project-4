import getRefs from './common/refs';
import { fetchTrailer, fetchMoviesByID } from './api/fetchMovies';
import { getModalTemplate, secondModalMarkup } from './get-templates';
import { onCloseCardModal } from './close-modal';
import { actionWithModalWindow } from './modal';

const { moviesGallery, backdrop } = getRefs();

moviesGallery.addEventListener('click', e => {
  if (e.target.nodeName === 'UL') {
    return;
  }

  const movieId = e.target.closest('.movies-gallery__item').dataset.id;

  getMovieById(movieId);
});
async function getMovieById(movieId) {
  try {
    const moviesInfo = await fetchMoviesByID(movieId);

    backdrop.innerHTML = getModalTemplate(moviesInfo);
    backdrop.classList.remove('backdrop-modal-hidden');
    actionWithModalWindow(moviesInfo);
    onCloseCardModal();
  } catch (error) {
    backdrop.classList.remove('backdrop-modal-hidden');
    backdrop.innerHTML = secondModalMarkup();
    onCloseCardModal();
    console.log(error.message);
  }
}
import getRefs from './common/refs';
import { fetchTrailer, fetchMoviesByID } from './api/fetchMovies';
import { getModalTemplate, secondModalMarkup } from './get-templates';
import { onCloseCardModal } from './close-modal';
import { actionWithModalWindow } from './modal';
import { getGenresList } from './main-page-render';

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
    const genres = await getGenresList();
    const moviesInfo = await fetchMoviesByID(movieId);

    backdrop.innerHTML = getModalTemplate(moviesInfo, false, false, genres);
    backdrop.classList.remove('backdrop-modal-hidden');
    actionWithModalWindow(moviesInfo);
    onCloseCardModal();
  } catch (error) {
    const genres = await getGenresList();
    backdrop.classList.remove('backdrop-modal-hidden');
    backdrop.innerHTML = secondModalMarkup(moviesInfo, genres);
    onCloseCardModal();
    console.log(error.message);
  }
}

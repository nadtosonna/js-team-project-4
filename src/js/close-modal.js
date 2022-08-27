import getRefs from './common/refs';

const backdropREF = document.querySelector('.backdrop-team');

window.addEventListener('keydown', closeModalWindow);
backdropREF.addEventListener('click', closeModalWindow);
const { modal } = getRefs();

export function closeModalWindow(event) {
  if (event.code === 'Escape' || event.target === backdropREF) {
    backdropREF.classList.add('is-hidden');
    window.removeEventListener('keydown', closeModalWindow);
    backdropREF.removeEventListener('click', closeModalWindow);
    modal.classList.add('is-hidden');
  }
}

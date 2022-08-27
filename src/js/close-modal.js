import getRefs from './common/refs';


const { backdrop, closeModalBtn } = getRefs();

window.addEventListener('keydown', closeModalWindow);
backdrop.addEventListener('click', closeModalWindow);

closeModalBtn.addEventListener('click', closeModalWindowBtn =>
backdrop.classList.add('is-hidden'));


export function closeModalWindow(event) {
  if (event.code === 'Escape' || event.target === backdrop) {
    backdrop.classList.add('is-hidden');
    // window.removeEventListener('keydown', closeModalWindow);
    console.log(event.target);
  }
}

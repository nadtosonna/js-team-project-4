import getRefs from './common/refs';

const { backdrop } = getRefs();

export function onCloseCardModal() {
  window.addEventListener('keydown', closeModalWindow);
  backdrop.addEventListener('click', closeModalWindow);

  const closeModalBtn = document.querySelector('.modal-close');
  closeModalBtn.addEventListener('click', e =>
    backdrop.classList.add('backdrop-modal-hidden')
  );
}

export function closeModalWindow(event) {
  if (event.code === 'Escape' || event.target === backdrop) {
    backdrop.classList.add('backdrop-modal-hidden');
    // window.removeEventListener('keydown', closeModalWindow);
    console.log(event.target);
  }
}

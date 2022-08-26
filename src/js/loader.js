import getRefs from './common/refs';

const { preloader, loader } = getRefs();

window.addEventListener('load', () => {
  preloader.classList.add('loader-hide');
  setTimeout(() => {
    preloader.remove();
  }, 1000)
})

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

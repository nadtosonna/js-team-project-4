import getRefs from './common/refs';

const { loader } = getRefs();

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

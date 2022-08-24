import getRefs from './common/refs';
const refs = getRefs();

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader () {
  refs.loader.classList.add('is-hidden');
}
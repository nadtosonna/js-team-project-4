import getRefs from './common/refs';

const { preloader, loader } = getRefs();

document.body.onload = function () {
  setTimeout(function () {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000)
}

// window.addEventListener('load', () => {
//   preloader.classList.add('loader-hide');
//   setTimeout(() => {
//     preloader.remove();
//   }, 1000)
// })

// export function showLoader() {
//   loader.classList.remove('is-hidden');
// }

// export function hideLoader() {
//   loader.classList.add('is-hidden');
// }
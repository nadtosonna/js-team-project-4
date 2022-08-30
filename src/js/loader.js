import getRefs from './common/refs';

const { preloader, loader } = getRefs();

document.body.onload = function () {
  setTimeout(function () {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
};

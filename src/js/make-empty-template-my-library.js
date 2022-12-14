import getRefs from './common/refs';
import cat from '../images/cat.svg';
const refs = getRefs();

export function addEmptyTemplate(keyName) {
  refs.moviesGallery.innerHTML = '';
  refs.moviesGalleryContainer.classList.add('visually-hidden');
  refs.paginationContainer.classList.add('visually-hidden');
  if (localStorage.getItem(keyName) !== null) {
    return;
  }

  refs.emptyCard.insertAdjacentHTML('beforeend', markupEmptyTemplate());
}

export function markupEmptyTemplate() {
  return `
<section class="empty-template">
  <div class="container">
    <div class="empty-template__item">
      <img
        class="empty-template__img"
        src="${cat}"
        alt="cat crying"
      />
      <p class="empty-template__title">
        Oops!<br />
        List is empty! Hurry up and add movies!
      </p>
      <!-- <p class="empty-template__text">
        visit home <a class="empty-template__link" href="#">page</a>
      </p> -->
    </div>
  </div>
</section>`;
}

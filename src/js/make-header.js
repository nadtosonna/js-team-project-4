import { refs } from './common/refs';
import logoIcon from '../images/header/logo-icon.svg';
import search from '../images/header/search.svg';

createHeader = () => {
  return (refs.header.innerHTML = markupHeaderMobile());
};

const markupHeaderMobile = () => {
  return `<div class="header-container container">
    <div class="naw-wrapper">
      <img
        class="logo-icon"
        src="${logoIcon}"
        width="24"
        height="24"
        alt="logo icon"
      />
      <ul class="naw-list">
        <li class="naw-list-item"><a class="naw-list-link current" href="">Home</a></li>
        <li class="naw-list-item">
          <a class="naw-list-link" href="">my library</a>
        </li>
      </ul>
    </div>

    <form class="search-form">
      <label class="search-form__field">
        <input class="search-form__input" type="text" name="name" placeholder = 'Movie search' />
      </label>
      <button class="search-form__btn" type="submit"> <img
        class="logo-icon"
        src="${search}"
        width="12"
        height="12"
        alt="logo icon"
      /></button>
    </form>
  </div>`;
};

createHeader();

import { refs } from './common/refs';
import logoIcon from '../images/logo-icon.svg';

export default createHeader = () => {
  console.log(document.documentElement.clientWidth);
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
        <li class="naw-list-item"><a class="naw-list-link" href="">Home</a></li>
        <li class="naw-list-item">
          <a class="naw-list-link" href="">my library</a>
        </li>
      </ul>
    </div>

    <form class="contact-form">
      <label class="contact-form__field">
        <input class="contact-form__input" type="text" name="name" placeholder = 'Movie search' />
      </label>
      <button class="modal-btn-create-bank" type="submit">Створити</button>
    </form>
  </div>`;
};

createHeader();

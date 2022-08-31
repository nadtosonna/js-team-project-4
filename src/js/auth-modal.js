import getRefs from './common/refs';
import { goHomePage } from './make-header';
const { authBackdrop } = getRefs();
const authFormCloseIcon = document.querySelector('.auth-form-close-icon');
authBackdrop.classList.add('auth-form-hidden');

authFormCloseIcon.addEventListener('click', e => {
  authBackdrop.classList.add('auth-form-hidden');
  document.body.classList.toggle('body-overflow');
  goHomePage();
});

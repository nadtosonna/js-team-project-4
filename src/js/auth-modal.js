import getRefs from './common/refs';
const { authForm, authBackdrop } = getRefs();
console.log(authForm);

authBackdrop.classList.add('auth-form-hidden');

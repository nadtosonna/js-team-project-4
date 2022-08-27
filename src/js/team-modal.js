import getRefs from './common/refs';
const { teamRef, backdropTeamRef, closeBtnRef, body } = getRefs();

teamRef.addEventListener("click", openModal);
closeBtnRef.addEventListener("click", closeModal);
    
function openModal() {
  backdropTeamRef.classList.remove("is-hidden");
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscape)
}

function onEscape(event) {
  if (event.key === 'Escape') {
    backdropTeamRef.classList.add("is-hidden");
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscape);
  }
}

function closeModal() {
  backdropTeamRef.classList.add("is-hidden");
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscape);
}


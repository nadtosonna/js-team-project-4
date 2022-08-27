(() => {
  const refs = {
    openModal: document.querySelector('.movies-gallery__item'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  // refs.openModal.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }
})();

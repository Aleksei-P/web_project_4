function togglePopup(popup) {
  popup.classList.toggle('modal_open');
  if (popup.classList.contains('modal_open')) {
    document.addEventListener('keydown', closeWithEscape);
  }
  else {
    document.removeEventListener('keydown', closeWithEscape);
  }
};

function closeWithEscape(evt) {
  if (evt.key === 'Escape') {
    togglePopup(document.querySelector('.modal_open'));
  }
};

export { togglePopup, closeWithEscape };

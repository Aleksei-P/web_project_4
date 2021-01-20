class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element');
    return cardTemplate;
  }

  _setEventListeners() {
    const cardLikeButton = this._card.querySelector('.element__button');
    const cardDelete = this._card.querySelector('.element__delete');
    const cardImage = this._card.querySelector('.element__image');

    cardDelete.addEventListener('click', (e) => {
      e.target.closest('.element').remove();
    });

    cardLikeButton.addEventListener('click', (e) => {
      e.target.classList.toggle('element__button_like');

    })
    cardImage.addEventListener('click', (e) => {
      togglePopup(modalImage);
      popupImage.src = data.link;
      popupImageTitle.textContent = data.name;
    })
  }

  generateCard() {
    this._card = this._getCardTemplate().cloneNode(true);
    const cardTitle = this._card.querySelector('.element__title');
    const cardImage = this._card.querySelector('.element__image');
    cardTitle.textContent = this._name;
    cardImage.src = this._link;
    this._setEventListeners();
    return this._card;
  }
}

export default Card;

import { togglePopup } from './index.js'
import { modalImage, popupImage, popupImageTitle } from './index.js'
class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _getCardTemplate() {
    this._cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element');
    return this._cardTemplate;
  }

  _setEventListeners() {
    this._cardLikeButton = this._card.querySelector('.element__button');
    this._cardDelete = this._card.querySelector('.element__delete');
    this._cardDelete.addEventListener('click', (e) => {
      e.target.closest('.element').remove();
    });

    this._cardLikeButton.addEventListener('click', (e) => {
      e.target.classList.toggle('element__button_like');

    })

    this._cardImage.addEventListener('click', (e) => {
      togglePopup(modalImage);
      popupImage.src = this._link;
      popupImageTitle.textContent = this._name;
    })
  }

  generateCard() {
    this._card = this._getCardTemplate().cloneNode(true);
    this._cardTitle = this._card.querySelector('.element__title');
    this._cardImage = this._card.querySelector('.element__image');
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._card;
  }
}

export default Card;

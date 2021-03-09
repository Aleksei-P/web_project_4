 import { togglePopup } from './index.js'
 import { modalImage, popupImage, popupImageTitle } from './units.js'
class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    this._cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.element');
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

    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));

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




// new Card(
//   {
//     data: {...},
//     handleCardClick: (name, link) => {
//       imageModal.open(name, link)
//     }
//   }
//   )

  export default Card;

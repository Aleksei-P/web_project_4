import Popup from './Popup.js';
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._image = this._popupElement.querySelector('.modal__popup-image');
    this._imageTitle = this._popupElement.querySelector('.modal__popup-title');
  }

  open(data) {
    this._image.src = data.link;
    this._imageTitle.textContent = data.name;
    super.open();
  }
};

export default PopupWithImage;

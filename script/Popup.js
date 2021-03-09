 class Popup {
     constructor(popupSelector) {
         this._popupElement = document.querySelector(popupSelector);
         this._handleEscClose = this._handleEscClose.bind(this);
     }
     open() {
       this._popupElement.classList.add('modal_open');
     }

     close() {
       this._popupElement.classList.remove('modal_open');
       document.removeEventListener('keyup', this._handleEscClose);
     }

    _handleEscClose(evt) {
      if(evt.which == 27) {
        this.close();
      }
     }

     setEventListeners() {
      this._popupElement.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('.modal__button') || !evt.target.closest('modal_open')) {
          this.close();
        }

      });
     }
 }

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }
  open(link, name) {
    this._popupElement.querySelector('.modal__popup-image').src = link;
    this._popupElement.querySelector('.modal__popup-image').src = name;
    super.open();
  }
  setEventListeners() {
    super.setEventListeners();
  }
};



// const PopupWithForm = new Popup('');

export default { Popup, PopupWithImage };
// export default PopupWithImage;




 class Popup {
     constructor(popupSelector) {
       //console.log('popupSelector', popupSelector)
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
        if (evt.target == ('.modal__button') || !evt.target == ('modal_open')) {
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

class PopupWithForm extends Popup {
  constructor({popupSelector, submitHandler}) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._editButton = document.querySelector('.profile__edit-button')
    this._modalEdit = document.querySelector('.modal_edit');

  }

  _getInputValues() {
    this._inputs = this._popupElement.querySelectorAll('.form__input');
    this._values = {};
    this._inputs.forEach((input) => {
      this._values[input.name] = input.value;
    })
    return this._values;
  }

  setEventListeners() {
    // this._form = this._popupElement.querySelector('.form');
      this._popupElement.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._popupElement.querySelector('.form').reset();
  }

  /*
  this._editButton.addEventListener('click', () => this._modalEdit.open());
  open() {
    this._editButton.addEventListener('click', () => {
     //togglePopup(modalEdit);
     //nameInput.value = profileName.textContent;
     //infoInput.value = profileInfo.textContent;
     //editFormValidator.resetValidationError();
   });
  }
  */
}

export { Popup, PopupWithImage, PopupWithForm };
// export default PopupWithImage;




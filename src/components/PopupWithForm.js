import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    super(popupSelector);
    this._submitHandler = submitHandler;
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
  //remove card
  submitAction(action) {
    this._submitHandler = action;
  }
}

export default PopupWithForm;

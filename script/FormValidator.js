 class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
 }

 //show error input
  _showErrorMessage(input) {
    const error = this._form.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  // hide error input
  _hideErrorMessage(input) {
  const error = this._form.querySelector('#' + input.id + '-error');
  error.textContent = '';

  error.classList.remove(this._errorClass);
  input.classList.remove(this._inputErrorClass);
}

// check the input
_checkInputVslidity(input) {
  if (input.validity.valid) {
    this._hideErrorMessage(input);
  } else {
    this._showErrorMessage(input);
  }
}
   resetValidationError() {
     this._inputs.forEach((input) => {
       this._hideErrorMessage(input);
     });
   }

// change state of buttons
_toggleButtomState(inputs, button) {
  this._isValid = inputs.every((input) => input.validity.valid);

  if (this._isValid) {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.removeAttribute("disabled");
  } else {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.setAttribute("disabled", true);
  }
}

_setEventListeners() {
  this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  this._button = this._form.querySelector(this._submitButtonSelector);
  this._inputs.forEach((input) => {
    input.addEventListener('input', () => {
      this._checkInputVslidity(input);
      this._toggleButtomState(this._inputs, this._button);
    });
  });
}

// enable buttons validation
enableValidation() {
  this._form.addEventListener('submit', ((e) => {
      e.preventDefault();
    }))
    this._setEventListeners();
  }
}

export default FormValidator;

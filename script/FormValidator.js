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

  _showErrorMessage(input, validationMessage) {
    const error = this._form.querySelector('#' + input.id + '-error'); //  document -> this
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideErrorMessage(input, validationMessage) {
  const error = this._form.querySelector('#' + input.id + '-error');
  error.textContent = '';

  error.classList.remove(this._errorClass);
  input.classList.remove(this._inputErrorClass);
}

_checkInputVslidity(input) {
  if (input.validity.valid) {
    this._hideErrorMessage(input);
  } else {
    this._showErrorMessage(input);
  }
}



_toggleButtomState(inputs, button) {
   const isValid = inputs.every((input) => input.validity.valid);

  if (isValid) {
    button.classList.remove(this._inactiveButtonClass);
    button.removeAttribute("disabled");
  } else {
    button.classList.add(this._inactiveButtonClass);
    button.setAttribute("disabled", true);
  }
}

_setEventListeners() {
  const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  const button = this._form.querySelector(this._submitButtonSelector);
  // const isValid = inputs.every((input) => input.validity.valid);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      this._checkInputVslidity(input);
      this._toggleButtomState(input, button, this._inactiveButtonClass);
    });
  });

}

enableValidation() {
  this._form.addEventListener('submit', ((e) => {
      e.preventDefault();
    }))
    this._setEventListeners();
}
}

export default FormValidator;

// {
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__button",
//   inactiveButtonClass: "form__button_disabled",
//   inputErrorClass: "form__input_type_error",
//   errorClass: "form__error_visible"
// }

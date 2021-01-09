 class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
 }

  _showErrorMessage(input, validationMessage) {
    const error = this._form.querySelector('#' + input.id + '-error'); // замена document -> this
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

_checkInputVslidity(input, form, rest) {}

_toggleButtomState(inputs, button, { inactiveButtonClass, ...rest }) {}

_setEventListeners() {
  const inputs = Array.form(this._form.querySelectorAll(this._inputSelector));
  const button = this._form.querySelector(this._submitButtonSelector);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      this._checkInputVslidity(input, form, rest);
      this._toggleButtomState(inputs, button, rest,);
    })
  })

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

// forms
// enabling validation by calling enableValidation()
// pass all the settings on call

// show error
function showErrorMessage(input, form, { errorClass, inputErrorClass, ...rest }) {
  //const error = document.getElementById('inputProfileError');
  const error = document.querySelector('#' + input.id + '-error');
  error.textContent = input.validationMessage;
  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}
// hide error
function hideErrorMessage(input, form, { errorClass, inputErrorClass, ...rest }) {
  const error = document.querySelector('#' + input.id + '-error');
  error.textContent = '';

  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}


function checkInputVslidity(input, form, rest) {
  if (input.validity.valid) {
    hideErrorMessage(input, form, rest)
  } else {
    showErrorMessage(input, form, rest)
  }
}

// on/off button
function toggleButtomState(inputs, button, {inactiveButtonClass, ...rest}) {
  const isValid = inputs.every((input) => input.validity.valid)
  if(isValid) {
    button.classList.remove(inactiveButtonClass);

  } else {
    button.classList.add(inactiveButtonClass);

    }
  }


function enableValidation({ formSelector, inputSelector, submitButtonSelector, ...rest}) {
  const forms = [...document.querySelectorAll(formSelector)];
  forms.forEach((form) => {
    form.addEventListener('submit', ((e) => {
      e.preventDefault();
    }))

    const inputs = [...document.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputVslidity(input, form, rest);
        toggleButtomState(inputs, button, rest);
      })
    })
  })
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
});

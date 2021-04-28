export const defultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
}

export const modalEdit = document.querySelector('.modal_edit');
export const modalAdd = document.querySelector('.modal_add');
export const modalSaveAvatar = document.querySelector('.modal_edit-profile');

export const addCardForm = modalAdd.querySelector('.form');
export const editProfile = modalEdit.querySelector('.form');
export const saveAvatar = modalSaveAvatar.querySelector('.form');


//modal windows
export const modalImage = document.querySelector('.modal_image');

export const popupImage = modalImage.querySelector('.modal__popup-image');
export const popupImageTitle = modalImage.querySelector('.modal__popup-title');

//button
export const addButton = document.querySelector('.profile__add-button');
export const editButton = document.querySelector('.profile__edit-button');
export const closeButton = document.querySelector('.modal__button');
export const closeAddButton = modalAdd.querySelector('.modal__button');
export const closePopupImage = modalImage.querySelector('.modal__button');
export const saveImage = modalAdd.querySelector('.form__button');
export const editProfilePicture = document.querySelector('.profile__edit-picture');


//add new image
export const formAdd = modalAdd.querySelector('.form');
export const imageNewTitle = modalAdd.querySelector('.form__input_type_card-title');
export const imageNewLink = modalAdd.querySelector('.form__input_type_url');

export const form = document.querySelector('.form');

export const list = document.querySelector('.elements');

export const nameInput = document.querySelector('.form__input_type_name');
export const infoInput = document.querySelector('.form__input_type_info');
export const profileName = document.querySelector('.profile__title');
export const profileInfo = document.querySelector('.profile__subtitle');

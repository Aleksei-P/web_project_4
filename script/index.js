import FormValidator from './FormValidator.js'
import initialCards from './initialCards.js'
import Card from './Card.js';
import { PopupWithImage, Popup, PopupWithForm } from './Popup.js';
import Section from './Section.js';
import { togglePopup, closeWithEscape } from './utils.js';
import UserInfo from './UserInfo.js';

const defultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
}

const modalEdit = document.querySelector('.modal_edit');
const modalAdd = document.querySelector('.modal_add');

const addCardForm = modalAdd.querySelector('.form');
const editProfile = modalEdit.querySelector('.form');

const editFormValidator = new FormValidator(defultConfig, editProfile);
const addFormValidator = new FormValidator(defultConfig, addCardForm);

editFormValidator.enableValidation()
addFormValidator.enableValidation()

//modal windows
const modalImage = document.querySelector('.modal_image');

const popupImage = modalImage.querySelector('.modal__popup-image');
const popupImageTitle = modalImage.querySelector('.modal__popup-title');

//button
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__button');
const closeAddButton = modalAdd.querySelector('.modal__button');
const closePopupImage = modalImage.querySelector('.modal__button');
const saveImage = modalAdd.querySelector('.form__button');

//add new image
const formAdd = modalAdd.querySelector('.form');
const imageNewTitle = modalAdd.querySelector('.form__input_type_card-title');
const imageNewLink = modalAdd.querySelector('.form__input_type_url');

const form = document.querySelector('.form');

const list = document.querySelector('.elements');

const nameInput = document.querySelector('.form__input_type_name');
const infoInput = document.querySelector('.form__input_type_info');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');




//profile form submit

/*
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  togglePopup(modalEdit);
})

// open Profile and reset unsaved inputs
editButton.addEventListener('click', () => {
  togglePopup(modalEdit);
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
  editFormValidator.resetValidationError();
});

closeButton.addEventListener('click', () => {
  togglePopup(modalEdit);});
  closePopupImage.addEventListener('click', () => {
    togglePopup(modalImage);
  });

  // open add card popup and reset unsaved inputs
addButton.addEventListener('click', () => {togglePopup(modalAdd);
  imageNewTitle.value = "";
  imageNewLink.value = "";
  addFormValidator.resetValidationError();
});
*/

closeAddButton.addEventListener('click', () => {
  togglePopup(modalAdd);
});

modalEdit.addEventListener('click', function (evt) {
  if (evt.target === modalEdit) {
  togglePopup(modalEdit);
}
});

modalAdd.addEventListener('click', function (evt) {
  if (evt.target === modalAdd) {
    togglePopup(modalAdd);
  }
 });

modalImage.addEventListener('click', function (evt) {
  if (evt.target === modalImage) {
    togglePopup(modalImage);
  }
});
/*
  formAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    loadCard({name: imageNewTitle.value, link: imageNewLink.value});
    togglePopup(modalAdd);
  });
*/
const loadElements = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".elements");
    const cardElement = card.generateCard();
    //loadElements.addItem(cardElement);
    return cardElement;
  }
}, "elements"
);

loadElements.render();

const popupImageWindow = new PopupWithImage('.modal__popup-image');
popupImageWindow.setEventListeners();


const userInfo = new UserInfo(profileName, profileInfo);

const popupEditWindow = new PopupWithForm({
  popupSelector: '.modal_edit',
  submitHandler: (data) => {
    userInfo.setUserInfo(data.name, data.info);
    popupEditWindow.close();
  }

});

// editButton.addEventListener('click', () => {
//   const userData = userInfo.getUserInfo();
//   nameInput.value = userData.name;
//   infoInput.value = userData.info;
//   });

popupEditWindow.setEventListeners();
editButton.addEventListener('click', () => popupEditWindow.open() );
closeButton.addEventListener('click', () => popupEditWindow.close());

const cardInfo = {
  name: "Name",
  link: " "
};

const popupAddCardWindow = new PopupWithForm({
  popupSelector:'.modal',
  submitHandle: (data) => {
  Section.render(data)
}
})

// const popupAddCardWindow = new PopupWithForm({
//   popupSelector: '.modal_add',
//   submitHandler: (data) => {
//     Section.render( data]);

//   }
// })

popupAddCardWindow.setEventListeners();
addButton.addEventListener('click', () => popupAddCardWindow.open());
closeButton.addEventListener('click', () => popupAddCardWindow.close());

// addButton.addEventListener('click', () => {
//   const NewCard = userInfo.getUserInfo();
//   imageNewTitle.value = NewCard.name;
//   imageNewLink.value = NewCard.info;
// })



//export  { togglePopup };
export { modalImage, popupImage, popupImageTitle };



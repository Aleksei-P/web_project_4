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


const loadElements = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".elements");
    const cardElement = card.generateCard();
    return cardElement;
  }
},
"elements"
);


loadElements.render();

const popupImageWindow = new PopupWithImage('.modal__popup-image');
popupImageWindow.setEventListeners();


const userInfo = new UserInfo(profileName, profileInfo);

const popupEditWindow = new PopupWithForm({
  popupSelector: '.modal_edit',
  submitHandler: (data) => {
    userInfo.setUserInfo(data.name, data.link);
    popupEditWindow.close();
  }

});

const popupAddCardWindow = new PopupWithForm({
  popupSelector: '.modal_add',
  submitHandler: (data) => {
    const newCard = new Card(data, ".elements");
    const cardElement = newCard.generateCard();
    loadElements.addItem(cardElement)
  }
}
)
  popupEditWindow.setEventListeners();
  popupAddCardWindow.setEventListeners();
  editButton.addEventListener('click', () => popupEditWindow.open() );
  closeButton.addEventListener('click', () => popupEditWindow.close());
  closeAddButton.addEventListener('click', () => popupAddCardWindow.close());
  editButton.addEventListener('click', () => popupEditWindow.open());
  addButton.addEventListener('click', () => popupAddCardWindow.open());


 // createCard.addItem(data);

  // const popupAddCardWindow = new PopupWithForm({
    //   popupSelector: '.modal_add',
    //   submitHandler: (data) => {
  //     Section.render( data]);

//   }
// })


// addButton.addEventListener('click', () => {
  //   const NewCard = userInfo.getUserInfo();
  //   imageNewTitle.value = NewCard.name;
  //   imageNewLink.value = NewCard.info;
// })
//loadElements.addItem(popupAddCardWindow.generateCard());

//export  { togglePopup };
export { modalImage, popupImage, popupImageTitle };



import './index.css';
import FormValidator from '../components/FormValidator.js';
import initialCards from '../utils/initialCards.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { defultConfig, modalEdit, modalAdd, addCardForm, editProfile,
  modalImage, popupImage, popupImageTitle, addButton, editButton, closeButton,
  closeAddButton, closePopupImage, saveImage, formAdd, imageNewTitle, imageNewLink,
  form, list, nameInput, infoInput, profileName, profileInfo} from '../utils/constants.js';

  //Forms
const editFormValidator = new FormValidator(defultConfig, editProfile);
const addFormValidator = new FormValidator(defultConfig, addCardForm);

editFormValidator.enableValidation()
addFormValidator.enableValidation()

//Popup Image
const popupImageWindow = new PopupWithImage('.modal_image');

const loadElements = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, ".elements", () => popupImageWindow.open(data) );
    //class Card {constructor(data, cardSelector, handleCardClick)}
    const cardElement = card.generateCard();
    return cardElement;
  }
},
"elements"
);
loadElements.render();

const userInfo = new UserInfo(profileName, profileInfo);

const popupEditWindow = new PopupWithForm({
  popupSelector: '.modal_edit',
  submitHandler: (data) => {
    userInfo.setUserInfo(data.name, data.info);
    //method setUserInfo(name, info) { this._name.textContent = name; this._info.textContent = info; };
    popupEditWindow.close();
  }
});

const popupAddCardWindow = new PopupWithForm({
  popupSelector: '.modal_add',
  submitHandler: (data) => {
    const newCard = new Card(data, ".elements", () => popupImageWindow.open(data));
    //class Card {constructor(data, cardSelector, handleCardClick)}
    const cardElement = newCard.generateCard();
    loadElements.addItem(cardElement)
    popupAddCardWindow.close();

  }
}
)


  popupImageWindow.setEventListeners();
  popupEditWindow.setEventListeners();
  popupAddCardWindow.setEventListeners();
  // Event Listener for buttons
  closeButton.addEventListener('click', () => popupEditWindow.close());
  closeAddButton.addEventListener('click', () => popupAddCardWindow.close());
  addButton.addEventListener('click', () => popupAddCardWindow.open());
  closePopupImage.addEventListener('click', () => popupImageWindow.close());
  editButton.addEventListener('click', () => {
    const userParameters = userInfo.getUserInfo();
    nameInput.value = userParameters.name;
    infoInput.value = userParameters.info;
    popupEditWindow.open()
  });

import './index.css';
import FormValidator from '../components/FormValidator.js';
// import initialCards from '../utils/initialCards.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { defultConfig, modalEdit, modalAdd, addCardForm, editProfile,
  modalImage, popupImage, popupImageTitle, addButton, editButton, closeButton,
  closeAddButton, closePopupImage, saveImage, formAdd, imageNewTitle, imageNewLink,
  form, list, nameInput, infoInput, profileName, profileInfo} from '../utils/constants.js';
import Api from '../components/Api.js';

  const api = new Api ({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    authToken: "97a4c738-0732-47f2-a8a7-8e015422339a",
    "Content-Type": "application/json"
  })

api.getUserInfo().then(res => {
  userInfo.setUserInfo(res.name, res.about)
})



  //Forms
const editFormValidator = new FormValidator(defultConfig, editProfile);
const addFormValidator = new FormValidator(defultConfig, addCardForm);

editFormValidator.enableValidation()
addFormValidator.enableValidation()

//Popup Image
const popupImageWindow = new PopupWithImage('.modal_image');

let loadElements;
api.getCardList().then(cards => {
loadElements = new Section({
  items: cards,
  renderer: (data) => {
    const card = new Card(data, ".elements", () => popupImageWindow.open(data),
      () => api.deleteCard(data._id).then(() => {
        card._handleDeleteClick(data._id)
      }
 ))
    //class Card {constructor(data, cardSelector, handleCardClick, handleDeleteClick)}
    const cardElement = card.generateCard();
    return cardElement;
  }
},
"elements"
);
  loadElements.render(cards);
  }
);


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
    //class Card {constructor(data, cardSelector, handleCardClick)}
    //class Section createCard(data) {this.addItem(this._renderer(data)) }}
    api.addCard(data).then(data => {

      loadElements.generateCard(data);
   })
    popupAddCardWindow.close();
  }
}
)


  popupImageWindow.setEventListeners();
  popupEditWindow.setEventListeners();
  popupAddCardWindow.setEventListeners();
  // // Event Listener for buttons, close listeners in the class Popup.
  addButton.addEventListener('click', () => popupAddCardWindow.open());
  editButton.addEventListener('click', () => {
    const userParameters = userInfo.getUserInfo();
    nameInput.value = userParameters.name;
    infoInput.value = userParameters.info;
    popupEditWindow.open()
  });

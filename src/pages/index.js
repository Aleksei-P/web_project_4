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
  form, list, nameInput, infoInput, profileName, profileInfo, editProfilePicture} from '../utils/constants.js';
import Api from '../components/Api.js';

  const api = new Api ({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    authToken: "97a4c738-0732-47f2-a8a7-8e015422339a",
    "Content-Type": "application/json"
  })
api.getUserInfo().then(res => {
  userInfo.setUserInfo(res.name, res.about, res.avatar, res._id)
})

function loadingTextButton(isLoading, modal){
  if (isLoading) {
    modal.querySelector('.form__button').textContent = "Saving...";
  }
  else {
    modal.querySelector('.form__button').textContent = "Save";
  }
}

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
    const card = new Card(data, userInfo.getUserInfo().id, ".elements", () => popupImageWindow.open(data),
      (e) => api.deleteCard(data._id).then(() => {
        e.target.closest('.element').remove()
      }),

      (likeButton, cardLikes) => {

        api.switchLike(data._id, card.getIsLiked())
        .then( res => {
          likeButton.classList.toggle('element__button_like');
          cardLikes.textContent = res.likes.length;
        })
      }
    )
      // console.log(userInfo.getUserInfo());

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


const userInfo = new UserInfo(profileName, profileInfo, editProfilePicture);

const popupEditWindow = new PopupWithForm({
  popupSelector: '.modal_edit',
  submitHandler: (data) => {
    loadingTextButton(true, editProfile);
    api.updateUserInfo({
      name: data.name,
      about: data.info,
    })
    .then(() => {
      userInfo.setUserInfo(data.name, data.info, data.avatar);
    })
    .finally(() => {
      loadingTextButton(false, editProfile);
    })
    //method setUserInfo(name, info) { this._name.textContent = name; this._info.textContent = info; };
    popupEditWindow.close();
  }
});

const popupAddCardWindow = new PopupWithForm({
  popupSelector: '.modal_add',
  submitHandler: (data) => {
    api.addCard(data).then(data => {

      loadElements.createCard(data);
    })
    popupAddCardWindow.close();
  }
}
)

const popupEditProfilePicture = new PopupWithForm({
  popupSelector: '.modal_edit-profile',
  submitHandler: (data) => {
    api.updateUserPicture({
      avatar: data.avatar
    })
    .then((res) => {
      console.log("avatar", data);
      userInfo.setUserAvatar(editProfilePicture.src);
      // editProfilePicture.src = res.avatar;
    })
    popupEditProfilePicture.close();
  }
}
)

  popupImageWindow.setEventListeners();
  popupEditWindow.setEventListeners();
  popupAddCardWindow.setEventListeners();
  popupEditProfilePicture.setEventListeners();
  // // Event Listener for buttons, close listeners in the class Popup.
  editProfilePicture.addEventListener('click', () => popupEditProfilePicture.open());
  addButton.addEventListener('click', () => popupAddCardWindow.open());
  editButton.addEventListener('click', () => {
    const userParameters = userInfo.getUserInfo();
    nameInput.value = userParameters.name;
    infoInput.value = userParameters.info;
    popupEditWindow.open()
  });

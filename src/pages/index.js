import './index.css';
import FormValidator from '../components/FormValidator.js';
// import initialCards from '../utils/initialCards.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  defultConfig, modalEdit, modalAdd, addCardForm, editProfile, cardDeleteButton,
  modalImage, popupImage, popupImageTitle, addButton, editButton, closeButton,
  closeAddButton, closePopupImage, saveImage, formAdd, imageNewTitle, imageNewLink,
  form, list, nameInput, infoInput, profileName, profileInfo, editProfilePicture, saveAvatar} from '../utils/constants.js';
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
const saveAvatarFormValidator = new FormValidator(defultConfig, saveAvatar);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
saveAvatarFormValidator.enableValidation();

//Popup Image
const popupImageWindow = new PopupWithImage('.modal_image');
let confirmDelete;

let loadElements;
api.getCardList().then(cards => {
loadElements = new Section({
  items: cards,
  renderer: (data) => {
    const card = new Card(data, userInfo.getUserInfo().id, ".elements", () => popupImageWindow.open(data),
      /*(e) => api.deleteCard(data._id).then(() => {
        e.target.closest('.element').remove()
      })
      */
      confirmDelete = new PopupWithForm({
       popupSelector: '.modal_deleted',
       submitHandler: (data) => {
         (e) => api.deleteCard(data._id)
           .then(() => {
             e.target.closest('.element').remove()
           }),

           confirmDelete.close();
       }
     }),

      (likeButton, cardLikes) => {
        console.log("like", card.getIsLiked())
        api.switchLike(data._id, card.getIsLiked())
        .then( res => {
          likeButton.classList.toggle('element__button_like');
          cardLikes.textContent = res.likes.length;
          card._likes = res.likes
        })
      }
    )
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
    .then((res) => {
      userInfo.setUserInfo(data.name, data.info, res.avatar);
    })
    .finally(() => {
      loadingTextButton(false, editProfile);
    })
     popupEditWindow.close();
  }
});

const popupAddCardWindow = new PopupWithForm({
  popupSelector: '.modal_add',
  submitHandler: (data) => {
    loadingTextButton(true, addCardForm);
    api.addCard(data)
    .then(data => {
      loadElements.createCard(data);
    })
      .finally(() => {
        loadingTextButton(false, addCardForm);
      })
    popupAddCardWindow.close();
  }
});



const popupEditProfilePicture = new PopupWithForm({
  popupSelector: '.modal_edit-profile',
  submitHandler: (data) => {
    loadingTextButton(true, saveAvatar);
    api.updateUserPicture({
      avatar: data.avatar
    })
    .then((res) => {
      console.log("avatar", res.avatar);
      userInfo.setUserAvatar(res.avatar);
    })
    .finally(() => {
      loadingTextButton(false, saveAvatar);
      })

    popupEditProfilePicture.close();
  }
}
)
  confirmDelete.setEventListeners();
  popupImageWindow.setEventListeners();
  popupEditWindow.setEventListeners();
  popupAddCardWindow.setEventListeners();
  popupEditProfilePicture.setEventListeners();
  // // Event Listener for buttons, close listeners in the class Popup.
  editProfilePicture.addEventListener('click', () => popupEditProfilePicture.open());
  addButton.addEventListener('click', () => popupAddCardWindow.open());
  cardDeleteButton.addEventListener('click', () => confirmDelete.open());


  editButton.addEventListener('click', () => {
    const userParameters = userInfo.getUserInfo();
    nameInput.value = userParameters.name;
    infoInput.value = userParameters.info;
    popupEditWindow.open()
  });

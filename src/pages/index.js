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

// api.getAllUserInfo().then(([getCardList, getUserInfo ]) => {
//   userInfo.setUserInfo(getUserInfo.name, getUserInfo.about, getUserInfo.avatar, getUserInfo._id);
// })
// api.getUserInfo().then(res => {
//   userInfo.setUserInfo(res.name, res.about, res.avatar, res._id)
// })


function setLoadingButtonText(isLoading, modal, loadingText = "Saving...", defaultText = "Save"){
  if (isLoading) {
    modal.querySelector('.form__button').textContent = loadingText;
  }
  else {
    modal.querySelector('.form__button').textContent = defaultText;
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

let loadElements;

Promise.all([api.getUserInfo(), api.getCardList()]).then(([res, cards]) => {
  userInfo.setUserInfo(res.name, res.about, res.avatar, res._id);
  console.log(cards);

  loadElements = new Section({
    items: cards,
  renderer: (data) => {
    const card = new Card(data, userInfo.getUserInfo().id, ".elements", () => popupImageWindow.open(data),
    /*(e) => api.deleteCard(data._id).then(() => {
      e.target.closest('.element').remove()
    })
    */
   (e) => { confirmDelete.open(data);
    console.log("data del", data);
     setLoadingButtonText(false, document.querySelector('.modal_delete'), 'Deleting...', 'Yes' );
    confirmDelete.submitAction(() => {
      setLoadingButtonText(true, document.querySelector('.modal_delete'), 'Deleting...', 'Yes');
      api.deleteCard(data._id)
      .then(() => {
        e.target.closest('.element').remove();
        confirmDelete.close();
      })
      .catch(err => console.log(err));
    })
        },

        () => {
          api.switchLike(data._id, card.getIsLiked())
          .then( res => {
            card.updateLikes(res)
          })
          .catch(err => console.log(err));
      }
      )
      const cardElement = card.generateCard();
      return cardElement;
    }
  },
  "elements"
  );
  loadElements.render(cards);
});

const userInfo = new UserInfo(profileName, profileInfo, editProfilePicture);

const popupEditWindow = new PopupWithForm({
  popupSelector: '.modal_edit',
  submitHandler: (data) => {
    console.log("data edit", data);
    setLoadingButtonText(true, editProfile);
    api.updateUserInfo({
      name: data.name,
      about: data.info,
    })
    .then((res) => {
      userInfo.setUserInfo(data.name, data.info, res.avatar);
      popupEditWindow.close();
    })
    .finally(() => {
      setLoadingButtonText(false, editProfile);
    })
    .catch(err => console.log(err))
  }
});


const popupAddCardWindow = new PopupWithForm({
  popupSelector: '.modal_add',
  submitHandler: (data) => {
    setLoadingButtonText(true, addCardForm);
    api.addCard(data)
    .then(data => {
      loadElements.createCard(data);
      popupAddCardWindow.close();
    })
      .finally(() => {
        setLoadingButtonText(false, addCardForm);
      })
      .catch(err => console.log(err))
  }
});

const popupEditProfilePicture = new PopupWithForm({
  popupSelector: '.modal_edit-profile',
  submitHandler: (data) => {
    setLoadingButtonText(true, saveAvatar);
    api.updateUserPicture({
      avatar: data.avatar
    })
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      popupEditProfilePicture.close();
    })
    .finally(() => {
      setLoadingButtonText(false, saveAvatar);
    })
      .catch(err => console.log(err))
    }
}
)

const confirmDelete = new PopupWithForm({
  popupSelector: '.modal_delete',
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
  editButton.addEventListener('click', () => {
    const userParameters = userInfo.getUserInfo();
    nameInput.value = userParameters.name;
    infoInput.value = userParameters.info;
    popupEditWindow.open()
  });

//modal windows
const modal = document.querySelector('.modal');
const modalEdit = document.querySelector('.modal_edit');
const modalAdd = document.querySelector('.modal_add');
const modalImage = document.querySelector('.modal_image');

const popupImage = modalImage.querySelector('.modal__popup-image');
const popupImageTitle = modalImage.querySelector('.modal__popup-title');

//button
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = modal.querySelector('.modal__button');
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

function togglePopup(popup) {
  popup.classList.toggle('modal_open');
};

//profile form submit

form.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;

  togglePopup(modalEdit);
})

editButton.addEventListener('click', () => {togglePopup(modalEdit);});
// closeButton.addEventListener('click', () => {togglePopup(modalEdit);});

// closePopupImage.addEventListener('click', () => {togglePopup(modalImage);});

addButton.addEventListener('click', () => {togglePopup(modalAdd);});
// closeAddButton.addEventListener('click', () => {togglePopup(modalAdd);});

//close with button escape

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    modalImage.classList.remove('modal_open');
    modalEdit.classList.remove('modal_open');
    modalAdd.classList.remove('modal_open');
  }
});

// close with click

modal.addEventListener('click', function (evt) {
  if (evt.target.className != ('form' || 'form__input' || 'form__input_type_name' || 'form__header' || 'profile__title' || 'profile__subtitle')) {
  togglePopup(modalEdit);
}
  else { closeButton.addEventListener('click', () => { togglePopup(modalEdit); });}
});

modalAdd.addEventListener('click', function (evt) {
  if (evt.target != ('.form' || '.form__input' || '.form__input_type_name' || 'form__header' || '.modal_open')) {
    togglePopup(modalAdd);
  }
  else { closeAddButton.addEventListener('click', () =>
   { togglePopup(modalAdd); });}
});

modalImage.addEventListener('click', function (evt) {
  if (evt.target.className != 'modal__popup-image' ) {
    togglePopup(modalImage);
  }
  else { closePopupImage.addEventListener('click', () =>
  { togglePopup(modalImage); });}
});



//Cards <template>

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  },
];

//create and load cards

function createCard(data) {
  const cardTemplate = document.querySelector('.elements').content.querySelector('.element');
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const cardLikeButton = cardElement.querySelector('.element__button');
  const cardDelete = cardElement.querySelector('.element__delete');

  cardTitle.textContent = data.name;
  cardImage.src = data.link, alt = "cardImage";

  cardDelete.addEventListener('click', (e) => {
    e.target.closest('.element').remove();
  });

  cardLikeButton.addEventListener('click', (e) => {
    e.target.classList.toggle('element__button_like');

  })
  cardImage.addEventListener('click', (e) => {
    togglePopup(modalImage);
    popupImage.src = data.link;
    popupImageTitle.textContent = data.name;
  })
  return (cardElement);
};

function loadCard(data) {
  list.prepend(createCard(data));
};

initialCards.forEach(data => {
    loadCard(data);
  });

  formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    loadCard({name: imageNewTitle.value, link: imageNewLink.value});
    togglePopup(modalAdd);
  });

  /*

  modal.addEventListener('click', function () {
    togglePopup(modalEdit);
  });
  modalAdd.addEventListener('click', function () {
    modalAdd.classList.remove('modal_open');
  });

  modalImage.addEventListener('click', function () {
    modalImage.classList.remove('modal_open');
  });

  modal.onclick = function(e) {
     if (e.target.className = 'modal_open') {
       modalImage.style.display = 'none';
   }
  }
     document.addEventListener('click', function (evt) {
       if (evt.target.classList = modal) {
         modalImage.classList.remove('modal_open');
         modalEdit.classList.remove('modal_open');
         modalAdd.classList.remove('modal_open');
       }
      });

      document.onclick = function (evt) {
        if (evt.target.className != 'modal') {
          togglePopup(modalImage);
        };
      };
  */

//modal windows
const modal = document.querySelector('.modal');
const modalEdit = document.querySelector('.modal_edit');
const modalAdd = document.querySelector('.modal_add');
const modalImage = document.querySelector('.modal_image');

//
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


const nameInput = document.querySelector('.form__input_type_name');
const infoInput = document.querySelector('.form__input_type_info');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');


//profile form submit

form.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;

  toggleModal()
})

function toggleModal() {
  modal.classList.toggle('modal_open');
};

function toggleModalAdd() {
  modalAdd.classList.toggle('modal_open');
};

function toggleModalPopupImage() {
  modalImage.classList.toggle('modal_open');
};

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);

closeAddButton.addEventListener('click', toggleModalAdd);

closePopupImage.addEventListener('click', toggleModalPopupImage);


addButton.addEventListener('click', () => {
  toggleModalAdd();
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

/* start 1st version

initialCards.forEach(data => {
  const cardTemplate = document.querySelector('.elements').content.querySelector('.element');
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const cardLikeButton = cardElement.querySelector('.element__button');
  const cardLikeButtonOn = cardElement.querySelector('.element__button_like')
  const cardDelete = cardElement.querySelector('.element__delete');

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  const list = document.querySelector('.elements');
  list.prepend(cardElement);

  cardDelete.addEventListener('click', (e) => {
    e.target.closest('.element').remove();
  });

  cardLikeButton.addEventListener('click', (e) => {
    e.target.classList.toggle('element__button_like');
  });

  //open popup image

  cardImage.addEventListener('click', () => {
    toggleModalPopupImage();
    popupImage.src = data.link;
    popupImageTitle.textContent = data.name;

  })

})

//end 1st version
*/

// 2d version
 function createCard(data) {
   const cardTemplate = document.querySelector('.elements').content.querySelector('.element');
   const cardElement = cardTemplate.cloneNode(true);
   const cardImage = cardElement.querySelector('.element__image');
   const cardTitle = cardElement.querySelector('.element__title');
   const cardLikeButton = cardElement.querySelector('.element__button');
   const cardLikeButtonOn = cardElement.querySelector('.element__button_like')
   const cardDelete = cardElement.querySelector('.element__delete');


   cardTitle.textContent = data.name;
   cardImage.src = data.link;
   const list = document.querySelector('.elements');
   list.prepend(cardElement);

   cardDelete.addEventListener('click', (e) => {
     e.target.closest('.element').remove();
   });

   cardLikeButton.addEventListener('click', (e) => {
     e.target.classList.toggle('element__button_like');
   })
 };

initialCards.forEach(data => {
  createCard(data);
});

function addCard(data) {
  const list = document.querySelector('.element');
  list.prepend(createCard(data));
};

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  addCard({name: imageNewTitle.value, link: imageNewLink.value});
  toggleModalAdd();
});



/*
function addCard() {
  const cardElement = initialCards;

  list.prepend(cardTemplate);
};

//new image submit

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  cardTitle.textContent = imageNewTitle.value;
  cardImage.src = imageNewLink.value;
  addCard(imageNewTitle.value, imageNewLink.value);

});
*/
/*
function addCard() {
  let imageNewTitle = modalAdd.querySelector('.form__input_type_card-title');
  let imageNewLink = modalAdd.querySelector('.form__input_type_url');

  imageNewLink.insertAdjacentHTML('beforeend', imageNewTitle);

  imageNewLink.value = '';
  imageNewTitle.value = '';
}

saveImage.addEventListener('click', addCard);
*/
/*
function addCard() {
  const cardImage = document.querySelector('.element__image');
  const cardTitle = document.querySelector('.element__title');
  const list = document.querySelector('.elements');

  list.prepend();
};

//new image submit

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();

  addCard(imageNewTitle.value, imageNewLink.value);

});
*/



const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__button');
const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const nameInput = document.querySelector('.form__input_type_name');
const infoInput = document.querySelector('.form__input_type_info');
const profileName = document.querySelector('.popup__value_type_name');
const profileInfo = document.querySelector('.popup__value_type_info');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;

  toggleModal()

})

function toggleModal() {
  modal.classList.toggle('modal_open');
}

editButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)

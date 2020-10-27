const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__button');
const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const nameInput = document.querySelector('.form__input_type_name');
const infoInput = document.querySelector('.form__input_type_info');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');


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

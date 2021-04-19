class Card {
  constructor(data, currentUserId, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._id = data._id;
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardOwner = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._currentUserId = currentUserId;
  }

  getId(){
    return this._id;
  }

  getLike(){
    return this_likes;
  }

  getCurrentID() {
    return this._currentUserId;
  }

  _switchLikeButton() {
    if (this._likes._id === this._cardOwner) {
      this._cardLikeButton.classList.add("element__button_like");
    }
    else {
      this._cardLikeButton.classList.remove("element__button_like");
    }
  }

  getIsLiked() {
    if ( this._likes.find(like => like._id === this._currentUserId))
    {this._cardLikeButton.classList.add("element__button_like")};

  }

  _updateVisibleLikes() {
  if (this.getIsLiked()) {
    this._cardLikeButton.classList.add("element__button_like");
    }
  // else {
  //   this._cardLikeButton.classList.remove("element__button_like");
  // }
  }

  _getCardTemplate() {
    this._cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.element');
    return this._cardTemplate;
  }

  _setEventListeners() {
    this._cardImage = this._card.querySelector('.element__image');
    this._cardLikeButton = this._card.querySelector('.element__button');
    this._cardDelete = this._card.querySelector('.element__delete');


    // this._cardDelete.addEventListener('click', (e) => {
    //   e.target.closest('.element').remove();
    // });

    this._cardDelete.addEventListener('click', (e) => {
      this._handleDeleteClick(e);
    });

    this._cardImage.addEventListener('click', () => {
        this._handleCardClick()
      });


      this._cardLikeButton.addEventListener('click', () => {
        this._handleLikeClick(this._cardLikeButton, this._cardLikes);
    })

    // this._cardLikeButton.addEventListener('click', (e) => {
    //   e.target.classList.toggle('element__button_like');
    // })

  }

  generateCard() {
    this._card = this._getCardTemplate().cloneNode(true);
    this._cardTitle = this._card.querySelector('.element__title');
    this._cardImage = this._card.querySelector('.element__image');
    this._cardLikes = this._card.querySelector('.element__button-like-count');
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardLikes.textContent  = this._likes.length;
    this._setEventListeners();
    this._updateVisibleLikes();
    this.getIsLiked;
    return this._card;
  }
}

  export default Card;

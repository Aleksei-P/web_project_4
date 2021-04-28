export default class Api {
  constructor({baseUrl, authToken}) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authToken
      }
    })

      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => { console.log(err); })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authToken
      }
    })

      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => { console.log(err); })
  }

  addCard({name, link}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        link
      })
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => { console.log(err); })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json"
      },
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => { console.log(err); })
  }



  updateUserInfo({name, about}){
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => { console.log(err); })
  }

  switchLike(cardId, method) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: method ? "DELETE" : "PUT",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json"
      },
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => { console.log(err); })
  }


  updateUserPicture (avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        avatar
      )
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => { console.log(err); })
  }

}


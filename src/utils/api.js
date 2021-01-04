class Api {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _getHeaders() {
    const token = localStorage.getItem('jwt'); 
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  _getResponseData = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._getHeaders()
    })
      .then(res => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      })
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._getHeaders()
    })
      .then(res => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      })
  }

  sendUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      })
  }

  postNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res.data;
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    })
      .then(res => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      })
  }

  changeLike(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._getHeaders()
    })
      .then(res => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res.data;
      })
  }

  changeAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      })
  }

}

const api = new Api({
  baseUrl: 'https://api.pikachu.students.nomoredomains.rocks',

});

export default api;
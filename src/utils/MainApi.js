// export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'
export const BASE_URL = 'http://api.filmsdiploma.nomoreparties.sbs'
export const request = ({ url, method = "POST", token, body }) => {
  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(!!token && { Authorization: `Bearer ${token}` }),
    },
    ...(!!body && { body: JSON.stringify(body) }),
  };
  return fetch(`${BASE_URL}/${url}`, config).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response.status);
  });
};

export const register = (username, email, password) => {
  return request({
    url: `signup`,
    body: {username, email, password},
  });
};

export const authorize = (email, password) => {
  return request({
    url: `signin`,
    body: { email, password },
  });
};

export const getContent = (token) => {
  return request({
    url: `users/me`,
    method: "GET",
    token,
  });
};

export const getInitialCards = () => {
  //     •	получить список всех карточек в виде массива (GET)
  return fetch(`${this._url}/cards`, {
    method: "GET",
    headers: this._headers,
  }).then((res) => this._errorHandler(res));
}

export const addNewCard = (data)=> {
  //   •	добавить карточку (POST)
  return fetch(`${this._url}/cards`, {
    method: "POST",
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    }),
  }).then((res) => this._errorHandler(res));
}

export const deleteCard= (data) => {
  // •	удалить карточку (DELETE)
  return fetch(`${this._url}/cards/${data}`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => this._errorHandler(res));
}

export const setUserInfo = (data) => {
  // •	заменить данные пользователя (PATCH)
  return fetch(`${this._url}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then((res) => this._errorHandler(res));
}

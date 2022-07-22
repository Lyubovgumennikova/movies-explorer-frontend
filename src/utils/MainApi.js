// export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'
export const BASE_URL = "http://api.filmsdiploma.nomoreparties.sbs";
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

export const register = (name, email, password) => {
  return request({
    url: `signup`,
    body: { name, email, password },
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

export const setUserInfo = (name, email, token) => {
  // •	заменить данные пользователя (PATCH)
  return request({
    url: `users/me`,
    method: "PATCH",
    body: { name, email },
    token,
  });
};

export const saveMovie = (data, token) => {
  //   •	добавить карточку (POST)
  return request({
    url: `movies`,
    // method: "POST",
    body: {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      trailerLink: data.trailerLink,
      thumbnail: data.thumbnail,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      movieId: data.movieId, },
    token,
  });
};

export const getSavedMovies = (token) => {
  //     •	получить список всех карточек в виде массива (GET)
  return request({
    url: `movies`,
    method: "GET",
    token,
  });
};

export const deleteCard = (data) => {
  // •	удалить карточку (DELETE)
  return fetch(`${this._url}/cards/${data}`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => this._errorHandler(res));
};

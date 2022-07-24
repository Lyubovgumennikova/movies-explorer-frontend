import getValidUrl from "./getValidUrl";

// export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'
export const BASE_URL = "https://api.filmsdiploma.nomoreparties.sbs";
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
  return request({
    url: `users/me`,
    method: "PATCH",
    body: { name, email },
    token,
  });
};

export const saveMovie = (data, token) => {
  return request({
    url: `movies`,
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
      movieId: data.movieId,
    },
    token,
  });
};

export const getSavedMovies = (token) => {
  return request({
    url: `movies`,
    method: "GET",
    token,
  });
};

export const deleteMovie = (data, token) => {
  return request({
    url: `movies/${data}`,
    method: "DELETE",
    token,
  });
};

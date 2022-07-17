export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";
class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _errorHandler(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMoviesData() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._errorHandler(res));
  }
}

const moviesApi = new MoviesApi({
  url: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

export default moviesApi;

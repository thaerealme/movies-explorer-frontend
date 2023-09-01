class MoviesApi {
  constructor (options){
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  getMovies() {
    return fetch(`${this._baseUrl}/`, {
      headers: this._headers,
    })
    .then((res) => this._checkResponse(res))
  }
  _checkResponse (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
})

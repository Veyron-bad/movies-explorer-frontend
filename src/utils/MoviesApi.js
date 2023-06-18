class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _isOk(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка ${res.status}!`);
    }

    getMovies() {
        return fetch(this._baseUrl + '/beatfilm-movies', {
            headers: this._header,
        })

            .then((res) => {
                return this._isOk(res);
            })
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {'Content-Type': 'application/json'}
})
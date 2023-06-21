class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _isOk(res) {
        if (res) {
            return res.json();
        }

        return Promise.reject(`Ошибка ${res.status}!`)
    }

    registration(data) {
        return fetch(this._baseUrl + '/signup', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        })

            .then((res) => {
                return this._isOk(res);
            })
    }

    login(data) {
        return fetch(this._baseUrl + '/signin', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
            credentials: 'include'
        })

            .then((res) => {
                return this._isOk(res);
            })
    }

    checkToken() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            credentials: 'include'
        })

            .then((res) => {
                return this._isOk(res)
            })
    }

    signOut() {
        return fetch(this._baseUrl + '/signout', {
            method: 'POST',
            headers: this._headers,
            credentials: 'include'
        })
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            credentials: 'include'
        })
    }

    editUserInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email
            }),
            credentials: 'include'
        })

            .then((res) => {
                return this._isOk(res);
            })
    }

    getMovies() {
        return fetch(this._baseUrl + '/movies', {
            headers: this._headers,
            credentials: 'include'
        })

            .then((res) => {
                return this._isOk(res);
            })
    }

    saveMovie(data) {
        return fetch(this._baseUrl + '/movies', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
            credentials: 'include'
        })

            .then((res) => {
                return this._isOk(res);
            })
    }

    deleteMovie(movieId) {
        return fetch(this._baseUrl + `/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include'
        })

            .then((res) => {
                return this._isOk(res);
            })
    }
}

export const mainApi = new MainApi({
    baseUrl: 'http://localhost:3001',
    headers: { 'Content-Type': 'application/json' }
})
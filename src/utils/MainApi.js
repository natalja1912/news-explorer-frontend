export const BASE_URL = 'https://api.news-reader.students.nomoredomains.rocks';
export const headers = {
    "Content-Type": "application/json"
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify({ "password": password, "email": email })
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 400) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Не передано одно из полей'
                    })
                }
                if (response.status === 401) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Пользователь с email не найден'
                    })
                }
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json();
        })
        .then((data) => {
            return data.data;
        });
};

export const register = (password, email, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify({ "password": password, "email": email, "name": name })
    })
        .then(response => {
            if (!response.ok) {
                if (response.status === 400) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Некорректно заполнено одно из полей'
                    })
                }
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json()
        })
        .then((data) => {
            return data;
        })
};

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include'
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 401) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Токен не передан или передан не в том формате'
                    })
                }
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json();
        })
}

export const createArticle = (data) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json();
        })
}

export const getArticles = () => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'GET',
        credentials: 'include',
        headers: headers,
    })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json();
        })
}

export const logout = () => {
    return fetch(`${BASE_URL}/logout`, {
        method: 'GET',
        credentials: 'include'
    })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return Promise.resolve({
                message: "Пользователь разлогировался"
            })
        })
} 
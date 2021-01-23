import { apiKey, numberOfDaysForNewsApi } from './constants';

class NewsApi {
    constructor(options) {
        this._url = options.baseUrl;
        this._pageSize = options.pageSize;
        this._to = options.to;
        this._from = options.from;
    }

    _getHeaders() {
        return {
            'x-api-key': apiKey
        }
    }

    _getResponseData = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }

    getCards(keyword) {
        return fetch(`${this._url}/everything?q=${keyword}&pageSize=${this._pageSize}&to=${this._to}&from=${this._from}&apiKey=${apiKey}`, {
            headers: this._getHeaders()
        })
            .then(res => {
                return this._getResponseData(res);
            })
            .then((res) => {
                return res;
            })
    }
}

const newsApi = new NewsApi({
    baseUrl: 'https://nomoreparties.co/news/v2',
    pageSize: 100,
    to: new Date().toISOString().slice(0, 10),
    from: new Date((new Date()).valueOf() - (24* 60* 60 * 1000 * numberOfDaysForNewsApi)).toISOString().slice(0,10)
});

export default newsApi;
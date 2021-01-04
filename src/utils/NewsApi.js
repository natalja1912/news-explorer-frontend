import { apiKey } from './constants';

class NewsApi {
    constructor(options) {
        this._url = options.baseUrl;
        this._pageSize = options.pageSize;
        this._to = options.to;
        this._from = new Date((new Date()).valueOf() - (24* 60* 60 * 1000 * 7)).toISOString().slice(0,10);
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

    getCards(topic) {
        return fetch(`${this._url}/everything?q=${topic}&pageSize=${this._pageSize}&to=${this._to}&from=${this._from}`, {
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
    baseUrl: 'https://newsapi.org/v2',
    pageSize: 100,
    to: new Date().toISOString().slice(0, 10)
});

export default newsApi;
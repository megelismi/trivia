const  https = require('https');

class TriviaFetcher {

    /**
     * Creates a trivia fetcher instance.
     *
     */

    constructor(category, difficulty, amount) {
        this._category   = category   && category.length   ? parseInt(category)       : undefined;
        this._difficulty = difficulty && difficulty.length ? difficulty.toLowerCase() : undefined;
        this._amount     = amount     && amount.length     ? parseInt(amount)         : 10;
    }

    /**
     * Fetches trivia information.
     *
     * @param {Function} callback
     */

    fetchQuestions(callback) {
        const options = {
            hostname: 'opentdb.com',
            method:   'GET',
            path:     this._urlPath()
        };

        const req = https.request(options, (response) => {
            let data = '';
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                const triviaData = JSON.parse(data);

                callback(null, triviaData.results);
            });

        });

        req.on('error', (error) => {
            console.log('Error: could not fetch trivia data', error);

            callback(error, null);
        });

        req.end();
    }

    /**
     * Builds the path for https library.
     *
     * @returns {String}
     * @private
     */

    _urlPath() {
        //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium

        let baseUrl = '/api.php?amount=' + this._amount;

        if (this._category) {
            baseUrl += '&category=' + this._category;
        }

        if (this._level) {
           baseUrl += '&difficulty=' + this._difficulty;
        }

        return baseUrl;
    }
}

module.exports = TriviaFetcher;
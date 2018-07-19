const  https = require('https');

class TriviaFetcher {

    /**
     * Creates a trivia fetcher instance.
     *
     */

    constructor() {
        // this._flightNumber = flightNumber.toLowerCase();
        // this._flightDate = flightDate.toLowerCase();
        // this._departureAirport = departureAirport.toUpperCase();
        // this._appId = process.env.FLIGHT_STATS_APP_ID;
        // this._appKey = process.env.FLIGHT_STATS_APP_KEY;
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
        return `/api.php?amount=10`;
    }
}

module.exports = TriviaFetcher;
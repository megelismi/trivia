const express = require('express');
const path    = require('path');
const app     = express();
const port    = process.env.PORT || 5000;

const TriviaFetcher = require("./handlers/triviaFetcher");

// API calls
app.get('/api/questions', (req, res) => {
    const fetcher = new TriviaFetcher();

    fetcher.fetchQuestions((err, response) => {
        console.log('response', response)

        if (!err) {
            res.send({ response });
        }
    });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
const express    = require('express');
const path       = require('path');
const app        = express();
const port       = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const TriviaFetcher = require("./handlers/triviaFetcher");

// API calls

app.post('/api/questions', (req, res) => {
    const { category, difficulty, amount } = req.body;

    const fetcher = new TriviaFetcher(category, difficulty, amount);

    fetcher.fetchQuestions((err, questions) => {
        if (err) {
           return  res.send({ err });
        }
        else {
            return res.send({ questions });
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
const express = require('express');
const fs = require('fs')
const app = express();
const port = 3000;

app.use('/', express.static('public'));

let budget = {}

fs.readFile('./dataset.json', 'utf-8', (err, data) => {
    if (err) throw err
    budget = JSON.parse(data)
})

app.get('/hello', (req, res) => {
    res.send('Konnichiwa!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
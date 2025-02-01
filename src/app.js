const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (reg, res) => {
    res.send('Hola mundo');
});

module.exports = app;
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('../mainPage.ejs')
})



app.listen(port, () => {
    console.log('8080')
})

// deploy

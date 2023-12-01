const express = require('express');
const app = express();
const PORT = 1213;

const connectdb = require('./config/connectdb');
connectdb();




app.listen(PORT, () => {
    console.log(PORT);
})
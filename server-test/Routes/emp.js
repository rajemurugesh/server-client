const express = require('express');
const router = express.Router();


const model = require('./Model/model');

app.get('/', (req, res)=>{
    res.send('hi')
})


module.exports = router;
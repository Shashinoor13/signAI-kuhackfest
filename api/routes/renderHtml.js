const express = require('express')
const router = express.Router()
const path = require('path');


router.get('/', async(req, res) => {
    console.log('rendering home page')
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


module.exports = router;
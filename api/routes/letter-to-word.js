const express = require('express')
const router = express.Router()

router.get('/', async(req, res) => {
    console.log("Called Learn")
    res.json({
        "message":"This is working"
    })
});

router.get('/:id', async(req, res) => {
    const key = req.params.id;
    console.log(key)
    res.json({
        "message":`this is working on ${req.params.id}`
    })
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {  
    const name = req.body.name
    console.log(name)
    console.log('got in here')
    res.json("Working")
});

module.exports = router;

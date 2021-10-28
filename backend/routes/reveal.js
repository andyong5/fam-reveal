var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/reveal', function(req, res, next) {  
    //const name = req.body.name
    console.log(name)
    res.send("Working")
});

module.exports = router;

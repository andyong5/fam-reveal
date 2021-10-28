const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) { 
    
    const fams = 
    {
        'andy nguyen': 'tight',
        'ally tran': 'close',
        'kyle chan': 'loose'
    } 
    var name = req.body.name;
    var name = name.toLowerCase();
    console.log(name);
    console.log('got in here');
    res.json({'redirect':'/' + fams[name]})
});

module.exports = router;

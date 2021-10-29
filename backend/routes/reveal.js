const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) { 
    
    const fams = 
    {
        'ANDY NGUYEN': 'Tight',
        'ALLY TRAN': 'Close',
        'KYLE CHAN': 'Loose'
    } 
    var name = req.body.name;
    var name = name.toUpperCase();
    console.log(name);
    console.log('got in here');
    if(!fams.hasOwnProperty(name)){
        console.log('Invalid name')
        res.status(400).send({message: 'Invalid name'});
    }
    res.json({'name':name, 'fam': fams[name]})
});

module.exports = router;

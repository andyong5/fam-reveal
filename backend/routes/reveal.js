const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) { 
    
    const fams = 
    {
        'ALEC MARISCAL': 'Tight',
        'CALVIN LIN': 'Tight',
        'JEFFERY ZHU': 'Tight',
        'JOEY SIU': 'Tight',
        'KOJI LO': 'Tight',
        'MANDY XIA': 'Tight',
        'AUDREY YEUNG': 'Close',
        'AMBERLY HACKMANN': 'Close',
        'NATHAN CHAN': 'Close',
        'LANI LAM': 'Close',
        'LOUIS GUO': 'Close',
        'CRYSTAL DANG': 'Close',
        'AMY NGUYEN': 'Loose',
        'CHRISTOPHER HACKETT': 'Loose',
        'ERICA TAM': 'Loose',
        'ISABELLA LEE': 'Loose',
        'JULIAN ATALIT': 'Loose',
        'KELLY ZHU': 'Loose',
        'SABRINA CHANG': 'Loose',
        'LUKE CHEN': 'Loose',
        'SEAN ARALAR': 'Loose'
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

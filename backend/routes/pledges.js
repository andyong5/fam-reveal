const express = require('express');
const router = express.Router();
const pool = require('./db')

router.get('/', async(req, res, next) => { 
    const pledges = 
    [
        {name: 'ALEC MARISCAL', fam: 'Tight'},
        {name: 'CALVIN LIN', fam: 'Tight'},
        {name: 'JEFFERY ZHU', fam: 'Tight'},
        {name: 'JOEY SIU', fam: 'Tight'},
        {name: 'KOJI LO', fam: 'Tight'},
        {name: 'MANDY XIA', fam: 'Tight'},
        {name: 'AUDREY YEUNG', fam: 'Close'},
        {name: 'AMBERLY HACKMANN', fam: 'Close'},
        {name: 'NATHAN CHAN', fam: 'Close'},
        {name: 'LANI LAM', fam: 'Close'},
        {name: 'LOUIS GUO', fam: 'Close'},
        {name: 'CRYSTAL DANG', fam: 'Close'},
        {name: 'AMY NGUYEN', fam: 'Loose'},
        {name: 'CHRISTOPHER HACKETT', fam: 'Loose'},
        {name: 'ERICA TAM', fam: 'Loose'},
        {name: 'ISABELLA LEE', fam: 'Loose'},
        {name: 'JULIAN ATALIT', fam: 'Loose'},
        {name: 'KELLY ZHU', fam: 'Loose'},
        {name: 'SABRINA CHANG', fam: 'Loose'},
        {name: 'LUKE CHEN', fam: 'Loose'},
        {name: 'SEAN ARALAR', fam: 'Loose'}
    ]
    const result = await pool.query('select * from pledges');
    console.log(result.rows);
    res.json(result.rows)
});

module.exports = router;

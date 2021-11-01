var express = require("express");
const pool = require("./db");
var router = express.Router();

/* GET home page. */
router.post("/", async (req, res, next) => {
  try {
    const name = req.body.name.toUpperCase();
    const family = req.body.fam;
    console.log('add post request')
    console.log(req.body)
    const result = await pool.query('INSERT INTO pledges (name, family) VALUES ($1, $2) returning *', [name, family]);
    console.log(result.rows)
    res.json(result.rows[0]);
  } catch (error) {
      console.error(error.message);
  }
});

module.exports = router;

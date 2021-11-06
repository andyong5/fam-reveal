var express = require("express");
const pool = require("./db");
var router = express.Router();

/* GET home page. */
router.post("/", async (req, res, next) => {
  const name = req.body.name.toUpperCase();
  const family = req.body.fam;
  console.log("add post request");
  console.log(req.body);
  pool.connect((err, client, release) => {
    if (err) {
      res.status(400).send({ message: err.stack });
      return console.error("Error acquiring client", err.stack);
    }
    client.query(
      "INSERT INTO pledges (name, family) VALUES ($1, $2)",
      [name, family],
      (err, result) => {
        release();
        if (err) {
          return console.error("Error executing query", err.stack);
        }
        console.log(result.rows[0]);
        res.json(result.rows[0]);
      }
    );
  });
});

module.exports = router;

var express = require("express");
const pool = require("./db");
var router = express.Router();

router.delete("/", async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error("Error acquiring client", err.stack);
      }
      client.query("truncate pledges", (err, result) => {
        release();
        if (err) {
          res.status(400).send({ message: err.stack });
          return console.error("Error executing query", err.stack);
        }
        console.log(result.rows);
        res.json("deleted all rows");
      });
    });
  } else {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error("Error acquiring client", err.stack);
      }
      client.query(
        "delete from pledges where name = $1",
        [req.body.name],
        (err, result) => {
          release();
          if (err) {
            res.status(400).send({ message: err.stack });
            return console.error("Error executing query", err.stack);
          }
          console.log(result.rows);
          res.json(result.rows[0]);
        }
      );
    });
  }
});

module.exports = router;

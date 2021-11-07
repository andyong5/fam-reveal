const express = require("express");
const router = express.Router();
const pool = require("./db");

router.get("/", async (req, res, next) => {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    client.query("SELECT * FROM pledges", (err, result) => {
      release();
      if (err) {
        res.status(400).send(err);
        return console.error("Error executing query", err.stack);
      }
      console.log(result);
      res.json({message: "hi"});
    });
  });
  res.json({message: "hi"});
});

module.exports = router;

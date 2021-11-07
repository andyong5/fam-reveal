var express = require("express");
const pool = require("./db");
var router = express.Router();

/* GET home page. */
router.post("/", async (req, res, next) => {
  const password = req.body.password;
  pool.connect((err, client, release) => {
    if (err) {
      res.status(400).send({ message: err.stack });
      return console.error("Error acquiring client", err.stack);
    }
    client.query(
      "select pass from admin_pass where pass = $1",
      [password],
      (err, result) => {
        release();
        if (err) {
          console.log("got in here");
          return console.error("Error executing query", err.stack);
        }
        if (result.rowCount == 0) {
          console.log("Invalid Password");
          res.status(400).send({ message: "Invalid Password" });
        } else {
          res.json("success");
        }
      }
    );
  });
});

module.exports = router;

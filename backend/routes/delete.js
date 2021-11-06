var express = require("express");
const pool = require("./db");
var router = express.Router();

router.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
      const result = await pool.query("truncate pledges");
      console.log(result.rows);
      res.json("deleted all rows");
    } else {
      const result = await pool.query("delete from pledges where name = $1 returning *", [req.body.name]);
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;

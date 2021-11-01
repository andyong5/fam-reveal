var express = require("express");
const pool = require("./db");
var router = express.Router();

router.delete("/", async (req, res, next) => {
  try {
    const result = await pool.query("truncate pledges");
    console.log(result.rows)
    res.json('successfully deleted');
  } catch (error) {
      console.error(error.message);
  }
});

module.exports = router;

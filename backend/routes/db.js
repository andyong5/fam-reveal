const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Microsemi**2",
  database: "pledges_list",
});
// async function asyncCall() {
//   const test = await pool.query("SELECT * FROM pledges");
//   console.log(test.rows[0]);
//   // expected output: "resolved"
// }

// asyncCall();
module.exports = pool;

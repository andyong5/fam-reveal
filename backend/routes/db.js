const pg = require("pg");
//const Pool = require("pg").Pool;

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "Microsemi**2",
//   database: "pledges_list",
// });
// const url =
//   "postgres://gacsncbmlletln:e6cc527d0f42a64ff046a490134abefb97b4f05b0219c73ad5e48806d75b9bed@ec2-18-210-95-55.compute-1.amazonaws.com:5432/dbfd4d1q5226fk";
const url = process.env.DATABASE_URL;
const pool = new pg.Pool({
  connectionString: url,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;

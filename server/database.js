const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

// user: process.env.HEROKU_USER,
// host: process.env.HEROKU_HOST,
// database: process.env.HEROKU_DB,
// password: process.env.HEROKU_PASS,

// user: process.env.DB_USER,
// host: process.env.DB_HOST,
// database: process.env.DATABASE,
// password: process.env.DB_PASS,

// const connection = new Pool({
//   user: process.env.HEROKU_USER,
//   host: process.env.HEROKU_HOST,
//   database: process.env.HEROKU_DB,
//   password: process.env.HEROKU_PASS,
//   port: process.env.DB_PORT,
//   ssl: true,
// });

const connection = new Pool({
  connectionString: process.env.HEROKU_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = connection;

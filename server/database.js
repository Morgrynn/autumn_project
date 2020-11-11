const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const connection = new Pool({
  connectionString: process.env.HEROKU_URI,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = connection;

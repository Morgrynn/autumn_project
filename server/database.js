const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const connection = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});
module.exports = connection;

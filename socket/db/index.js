const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  password: 'beastmode',

  host: 'localhost',
  port: 5432,
  database: 'hydroponicsdata',
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};

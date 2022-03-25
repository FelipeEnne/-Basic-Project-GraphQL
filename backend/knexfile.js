// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  client: 'mysql',
  connection: {
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

const dotenv = require('dotenv');
dotenv.config();


module.exports =
{
  development: {
    "username": "postgres",
    "password": process.env.PASSWORD_DB,
    "database": "foxyPub",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  test: {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production: {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}

const mysql = require('mysql');
require('dotenv').config();

const connection = {
    host:  '127.0.0.1',
    user: 'root',
    password: 'quyen123',
    database: process.env.DB_NAME,
    charset: 'utf8',
    port: 3306,
    connectionLimit: 10,
};

module.exports = {
    client: process.env.DB_CLIENT,
    connection,
    migrations: {
        tableName: 'migrations',
        directory: process.cwd() + '/server/migrations',
      },
    debug: false,
};

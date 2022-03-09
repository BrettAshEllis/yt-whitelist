const mysql = require("mysql");
const util = require("util")
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

pool.getConnection((err, connection) => {
    if (err) {
        return console.log("connection pool error")
    }
    if (connection) connection.release();
    return
});

const query = util.promisify(pool.query).bind(pool);

module.exports = query;
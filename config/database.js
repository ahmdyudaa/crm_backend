const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'crm_database', //perlu disesuaikan dengan nama database di cloudsql
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = db;

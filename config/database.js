const mysql = require('mysql');

const db = mysql.createConnection({
    host: '34.101.111.170',
    user: 'root',
    password: '',
    database: 'crm_database', //perlu disesuaikan dengan nama database di cloudsql
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = db;

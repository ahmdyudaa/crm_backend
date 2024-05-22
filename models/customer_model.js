const db = require('../config/database');

const Customer = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM customers';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM customers WHERE id = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO customers SET ?';
        db.query(sql, data, callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE customers SET ? WHERE id = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM customers WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Customer;

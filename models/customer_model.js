const db = require('../config/database');

const Customer = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM customer';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM customer WHERE id_customer = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO customer (id_prospek, alamat, posisi, id_alamat) VALUES (?,?,?,?)';
        db.query(sql, [data.id_prospek, data.alamat, data.posisi, data.id_alamat], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE customer SET ? WHERE id_customer = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM customer WHERE id_customer = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Customer;

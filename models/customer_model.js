const db = require('../config/database');

const Customer = {
    getAll: (callback) => {
        const sql = `SELECT customer.id AS customer_id, customer.alamat, prospek.nama, prospek.telp, prospek.status 
        FROM customer 
        JOIN prospek ON customer.id = prospek.id
        WHERE prospek.status = 'customer';`
        
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM customer WHERE id = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO customer (id, alamat) VALUES (?,?)';
        db.query(sql, [data.id, data.alamat], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE customer SET ? WHERE id = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM customer WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Customer;
const db = require('../config/database');

const Prospek = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM prospek';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM prospek WHERE id = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO prospek (nama, telp, status) VALUES (?,?,?)';
        db.query(sql, [data.nama, data.telp, data.status], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE prospek SET ? WHERE id = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM prospek WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Prospek;
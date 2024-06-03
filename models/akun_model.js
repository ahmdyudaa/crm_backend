const db = require('../config/database');

const Akun = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM akun';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM akun WHERE id_akun = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO akun (username, password) VALUES (?,?,?,?)';
        db.query(sql, [data.username, data.password], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE akun SET ? WHERE id_akun = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM akun WHERE id_akun = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Akun;
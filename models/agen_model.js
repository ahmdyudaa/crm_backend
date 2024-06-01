const db = require('../config/database');

const Agen = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM agen';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM agen WHERE id = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO agen (id, nama_agen) VALUES (?,?)';
        db.query(sql, [data.id, data.nama_agen], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE agen SET ? WHERE id = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM agen WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Agen;
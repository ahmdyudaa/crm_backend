const db = require('../config/database');

const Penjualan = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM penjualan';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM penjualan WHERE id_penjualan = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO penjualan (id_prospek, id_produk, tanggal, total) VALUES (?,?,?,?)';
        db.query(sql, [data.id_prospek, data.id_produk, data.tanggal, data.total], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE penjualan SET ? WHERE id_penjualan = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM penjualan WHERE id_penjualan = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Penjualan;
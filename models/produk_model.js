const db = require('../config/database');

const Produk = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM produk';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM produk WHERE id_produk = ?';
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        const sql = 'INSERT INTO produk (nama_produk, stok, kategori, harga) VALUES (?,?,?,?)';
        db.query(sql, [data.nama_produk, data.stok, data.kategori, data.harga], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE produk SET ? WHERE id_produk = ?';
        db.query(sql, [data, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM produk WHERE id_produk = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Produk;
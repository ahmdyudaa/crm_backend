const db = require('../config/database');

const Penjualan = {
    getAll: (callback) => {
        const sql = `SELECT 
        penjualan.id_penjualan, 
        prospek.id AS prospek_id, 
        prospek.nama AS prospek_nama, 
        produk.id_produk, 
        produk.nama_produk, 
        produk.kategori, produk.harga, 
        penjualan.tanggal, 
        penjualan.total 
        FROM penjualan 
        INNER JOIN prospek ON penjualan.id_prospek = prospek.id 
        INNER JOIN produk ON penjualan.id_produk = produk.id_produk`;

        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = `SELECT 
        penjualan.id_penjualan, 
        prospek.id AS prospek_id, 
        prospek.nama AS prospek_nama, 
        produk.id_produk, 
        produk.nama_produk, 
        produk.kategori, 
        produk.harga, 
        penjualan.tanggal, 
        penjualan.total 
        FROM penjualan 
        INNER JOIN prospek ON penjualan.id_prospek = prospek.id 
        INNER JOIN produk ON penjualan.id_produk = produk.id_produk
        WHERE id_penjualan = ?`;

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
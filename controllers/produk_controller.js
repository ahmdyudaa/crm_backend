const Produk = require('../models/produk_model');

const getAllProduk = (req, res) => {
    Produk.getAll((err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getProdukById = (req, res) => {
    Produk.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const createProduk = (req, res) => {
    Produk.create(req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const updateProduk = (req, res) => {
    Produk.update(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const deleteProduk = (req, res) => {
    Produk.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports = {
    getAllProduk,
    getProdukById,
    createProduk,
    updateProduk,
    deleteProduk
};
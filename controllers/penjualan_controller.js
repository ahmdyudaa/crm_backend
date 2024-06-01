const Penjualan = require('../models/penjualan_model');

const getAllPenjualan = (req, res) => {
    Penjualan.getAll((err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getPenjualanById = (req, res) => {
    Penjualan.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const createPenjualan = (req, res) => {
    Penjualan.create(req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const updatePenjualan = (req, res) => {
    Penjualan.update(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const deletePenjualan = (req, res) => {
    Penjualan.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports = {
    getAllPenjualan,
    getPenjualanById,
    createPenjualan,
    updatePenjualan,
    deletePenjualan
};
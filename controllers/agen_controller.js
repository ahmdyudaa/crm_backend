const Agen = require('../models/agen_model');

const getAllAgen = (req, res) => {
    Agen.getAll((err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getAgenById = (req, res) => {
    Agen.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const createAgen = (req, res) => {
    Agen.create(req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const updateAgen = (req, res) => {
    Agen.update(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const deleteAgen = (req, res) => {
    Agen.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports = {
    getAllAgen,
    getAgenById,
    createAgen,
    updateAgen,
    deleteAgen
};
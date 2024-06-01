const Prospek = require('../models/prospek_model');

const getAllProspek = (req, res) => {
    Prospek.getAll((err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getProspekById = (req, res) => {
    Prospek.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const createProspek = (req, res) => {
    Prospek.create(req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const updateProspek = (req, res) => {
    Prospek.update(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const deleteProspek = (req, res) => {
    Prospek.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports = {
    getAllProspek,
    getProspekById,
    createProspek,
    updateProspek,
    deleteProspek
};
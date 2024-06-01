const Akun = require('../models/akun_model');

const getAllAkun = (req, res) => {
    Akun.getAll((err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getAkunById = (req, res) => {
    Akun.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const createAkun = (req, res) => {
    Akun.create(req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const updateAkun = (req, res) => {
    Akun.update(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const deleteAkun = (req, res) => {
    Akun.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports = {
    getAllAkun,
    getAkunById,
    createAkun,
    updateAkun,
    deleteAkun
};
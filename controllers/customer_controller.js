const Customer = require('../models/customer_model');

const getAllCustomers = (req, res) => {
    Customer.getAll((err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getCustomerById = (req, res) => {
    Customer.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const createCustomer = (req, res) => {
    Customer.create(req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const updateCustomer = (req, res) => {
    Customer.update(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const deleteCustomer = (req, res) => {
    Customer.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};

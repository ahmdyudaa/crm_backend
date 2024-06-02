const db = require('../config/database');

const Customer = {
    getAll: (callback) => {
        const sql = `SELECT customer.id, prospek.nama, prospek.telp, customer.alamat 
        FROM customer 
        INNER JOIN prospek ON customer.id = prospek.id
        WHERE prospek.status = 'customer'`;
        
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = `SELECT customer.id, prospek.nama, prospek.telp, customer.alamat 
        FROM customer 
        INNER JOIN prospek ON customer.id = prospek.id
        WHERE prospek.status = 'customer' AND customer.id = ?`;
        
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        db.beginTransaction(err => {
            if (err) return callback(err);

            const sql1 = 'INSERT INTO customer (id, alamat) VALUES (?,?)';
            db.query(sql1, [data.id, data.alamat], (err, result) => {
                if (err) {
                    return db.rollback(() => {
                        callback(err);
                    });
                }

                const sql2 = "UPDATE prospek SET status = 'customer' WHERE id = ?";
                db.query(sql2, [data.id], (err, result) => {
                    if (err) {
                        return db.rollback(() => {
                            callback(err);
                        });
                    }

                    db.commit(err => {
                        if (err) {
                            return db.rollback(() => {
                                callback(err);
                            });
                        }
                        callback(null, result);
                    });
                });
            });
        });
    },
    update: (id, data, callback) => {
        db.beginTransaction(err => {
            if (err) return callback(err);

            const sql1 = 'UPDATE customer SET alamat = ? WHERE id = ?';
            db.query(sql1, [data.alamat, id], (err, result) => {
                if (err) {
                    return db.rollback(() => {
                        callback(err);
                    });
                }

                const sql2 = 'UPDATE prospek SET nama = ?, telp = ? WHERE id = ?';
                db.query(sql2, [data.nama, data.telp, id], (err, result) => {
                    if (err) {
                        return db.rollback(() => {
                            callback(err);
                        });
                    }

                    db.commit(err => {
                        if (err) {
                            return db.rollback(() => {
                                callback(err);
                            });
                        }
                        callback(null, result);
                    });
                });
            });
        });
    },
    delete: (id, callback) => {
        db.beginTransaction(err => {
            if (err) return callback(err);

            const sql1 = 'DELETE FROM customer WHERE id = ?';
            db.query(sql1, [id], (err, result) => {
                if (err) {
                    return db.rollback(() => {
                        callback(err);
                    });
                }

                const sql2 = "UPDATE prospek SET status = 'prospek' WHERE id = ?";
                db.query(sql2, [id], (err, result) => {
                    if (err) {
                        return db.rollback(() => {
                            callback(err);
                        });
                    }

                    db.commit(err => {
                        if (err) {
                            return db.rollback(() => {
                                callback(err);
                            });
                        }
                        callback(null, result);
                    });
                });
            });
        });
    }
};

module.exports = Customer;
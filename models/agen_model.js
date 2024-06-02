const db = require('../config/database');

const Agen = {
    getAll: (callback) => {
        const sql = `SELECT agen.id, prospek.nama, prospek.telp, customer.alamat, agen.nama_agen 
        FROM agen
        INNER JOIN customer ON agen.id = customer.id 
        INNER JOIN prospek ON customer.id = prospek.id
        WHERE prospek.status = 'agen'`;
        
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = `SELECT agen.id, prospek.nama, prospek.telp, customer.alamat, agen.nama_agen 
        FROM agen
        INNER JOIN customer ON agen.id = customer.id 
        INNER JOIN prospek ON customer.id = prospek.id
        WHERE prospek.status = 'agen' AND agen.id = ?`;
        
        db.query(sql, [id], callback);
    },
    create: (data, callback) => {
        db.beginTransaction(err => {
            if (err) return callback(err);

            const sql1 = 'INSERT INTO agen (id, nama_agen) VALUES (?,?)';
            db.query(sql1, [data.id, data.nama_agen], (err, result) => {
                if (err) {
                    return db.rollback(() => {
                        callback(err);
                    });
                }

                const sql2 = "UPDATE prospek SET status = 'agen' WHERE id = ?";
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

            const sql1 = 'UPDATE agen SET nama_agen = ? WHERE id = ?';
            db.query(sql1, [data.nama_agen, id], (err, result) => {
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

                    const sql3 = 'UPDATE customer SET alamat = ? WHERE id = ?';
                    db.query(sql3, [data.alamat, id], (err, result) => {
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
        });
    },
    delete: (id, callback) => {
        db.beginTransaction(err => {
            if (err) return callback(err);

            const sql1 = 'DELETE FROM agen WHERE id = ?';
            db.query(sql1, [id], (err, result) => {
                if (err) {
                    return db.rollback(() => {
                        callback(err);
                    });
                }

                const sql2 = "UPDATE prospek SET status = 'customer' WHERE id = ?";
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

module.exports = Agen;
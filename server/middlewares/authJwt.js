const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) =>{
        if (err) {
            return res.status(401).send({
                message: "Unauthorized"
            });
        }
        req.userId = decoded.id;
        next();
    });
};
isPenggunaBarang = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "pengguna_barang") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Pengguna Barang Role"
            });
            return;
        });
    });
};
isPengurusBarang = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "pengurus_barang") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Pengurus Barang Role"
            });
        });
    });
};
isPengurusOrPengguna = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "pengguna_barang") {
                    next();
                    return;
                }
                if (roles[i].name === "pengurus_barang") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Pengurus Barang or Pengguna Barang Role"
            });
        });
    });
};
const authJwt = {
    verifyToken: verifyToken,
    isPenggunaBarang: isPenggunaBarang,
    isPengurusBarang: isPengurusBarang,
    isPengurusOrPengguna: isPengurusOrPengguna
};
module.exports = authJwt;
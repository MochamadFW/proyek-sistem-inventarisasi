const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
checkDuplicateUsenameOrEmail = (req, res, next) => {
    //Username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username telah digunakan"
            });
            return;
        }
    });
};
checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Role tidak ditemukan : " + req.body.roles[i]
                });
                return;
            }
        }
    }

    next();
};
const verifySignUp = {
    checkDuplicateUsenameOrEmail: checkDuplicateUsenameOrEmail,
    checkRolesExisted: checkRolesExisted
};
module.exports = verifySignUp;
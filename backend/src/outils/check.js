"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var check = function (req) {
    var _a = req.body, password = _a.password, confirm = _a.confirm, username = _a.username, email = _a.email;
    var passhashed = bcrypt_1.default.hashSync(password, 10);
    return password === confirm ? { username: username, email: email, password: passhashed } : null;
};
exports.default = check;

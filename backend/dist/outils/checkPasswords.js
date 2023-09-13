"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check = (req) => {
    console.log(req.body);
    const { password, confirm } = req.body;
    console.log(password, confirm);
    password === confirm ? console.log('true') : console.log('false');
    // if (req.body.)
};
exports.default = check;

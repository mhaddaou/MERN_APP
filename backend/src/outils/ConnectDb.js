"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ConnectDb = function () {
    mongoose_1.default.connect("".concat(process.env.CONNECT)).then(function () {
        console.log('db connection established');
    }).catch(function (err) {
        console.log('db connection error ', err);
    });
};
exports.default = ConnectDb;

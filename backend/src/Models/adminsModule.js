"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var adminSchema_1 = require("../allSchema/adminSchema");
var adminModel = (0, mongoose_1.model)("admins", adminSchema_1.default);
exports.default = adminModel;

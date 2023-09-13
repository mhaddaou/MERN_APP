"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema_1 = require("../allSchema/userSchema");
var userModel = (0, mongoose_1.model)("users", userSchema_1.userSchema);
exports.default = userModel;

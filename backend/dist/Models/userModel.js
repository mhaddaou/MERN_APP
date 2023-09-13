"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema_1 = require("../allSchema/userSchema");
const userModel = (0, mongoose_1.model)("users", userSchema_1.userSchema);
exports.default = userModel;

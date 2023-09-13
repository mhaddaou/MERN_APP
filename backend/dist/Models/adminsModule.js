"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema_1 = __importDefault(require("../allSchema/adminSchema"));
const adminModel = (0, mongoose_1.model)("admins", adminSchema_1.default);
exports.default = adminModel;

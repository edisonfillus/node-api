"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
exports.config = {
    port: parseInt(process.env.PORT || "3000"),
    api: {
        prefix: '/api',
    },
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
};

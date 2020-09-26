"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
const controllers_1 = require("../controllers");
const config_1 = require("../config");
const body_parser_1 = __importDefault(require("body-parser"));
exports.expressLoader = (app) => {
    app.use(body_parser_1.default.json());
    app.use(config_1.config.api.prefix, controllers_1.routes());
};

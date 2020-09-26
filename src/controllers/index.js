"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const atendimentos_1 = require("./routes/atendimentos");
exports.routes = () => {
    const app = express_1.Router();
    atendimentos_1.atendimentos(app);
    return app;
};

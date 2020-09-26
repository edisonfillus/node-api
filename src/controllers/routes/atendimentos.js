"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atendimentos = void 0;
const express_1 = require("express");
const route = express_1.Router();
exports.atendimentos = (app) => {
    app.use("/atendimentos", route);
    route.get("/", (req, res) => {
        res.send("Server GET OK");
    });
    route.post("/", (req, res) => {
        console.log(req.body);
        res.send("Server POST");
    });
};

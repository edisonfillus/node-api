"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loaders_1 = require("./loaders");
const config_1 = require("./config");
const app = express_1.default();
loaders_1.initLoaders(app);
app.listen(config_1.config.port, () => console.log("Server started on port 3000"));

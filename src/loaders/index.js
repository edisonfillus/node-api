"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLoaders = void 0;
const express_1 = require("./express");
const logger_1 = require("./logger");
exports.initLoaders = (app) => {
    express_1.expressLoader(app);
    logger_1.logger.info('Express loaded');
};

import {expressLoader} from "./express";
import {logger} from "./logger";
import express from "express";

export const initLoaders = (app: express.Application) => {

    expressLoader(app);
    logger.info('Express loaded');

}
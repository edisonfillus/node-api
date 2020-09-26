import express from 'express';
import {routes} from '../controllers';
import {config} from "../config";
import bodyParser from "body-parser";

export const expressLoader = (app: express.Application) => {
    app.use(bodyParser.json());
    app.use(config.api.prefix, routes());

}
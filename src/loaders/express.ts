import express from 'express';
import {routes} from '../controllers';
import {config} from "../config";
import bodyParser from "body-parser";
import cors from "cors";

export const expressLoader = (app: express.Application) => {

    // Enable CORS
    app.use(cors());

    // Enable parse of URL Encoded and JSon bodies
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    // Configure the API path and include all the routes
    app.use(config.api.prefix, routes());

}
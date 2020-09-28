import express from 'express';
import {initLoaders} from "./loaders";

const app = express();

initLoaders(app);

export {app};




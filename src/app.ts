import express from 'express';
import {initLoaders} from "./loaders";
import {config} from "./config";

const app = express();

initLoaders(app);

app.listen(config.port, () => console.log("Server started on port 3000"));


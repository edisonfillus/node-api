import {Router} from 'express'
import {atendimentosController} from "./routes/atendimentos.controller";

export const routes = () => {
    const app = Router();
    atendimentosController(app);
    return app
}

import {Router} from 'express'
import {atendimentosController} from "./atendimentos.controller";

export const routes = () => {
    const router = Router();
    router.use(atendimentosController());
    return router
}

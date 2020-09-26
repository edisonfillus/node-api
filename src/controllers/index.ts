import {Router} from 'express'
import {atendimentos} from "./routes/atendimentos";

export const routes = () => {
    const app = Router();
    atendimentos(app);
    return app
}

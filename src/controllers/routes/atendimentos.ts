import {Router} from "express";
import {logger} from "../../loaders/logger";

const route = Router();

export const atendimentos = (app: Router) => {
    app.use("/atendimentos", route);

    route.get("/",(req,res) => {
        res.send("Server GET OK")
    });

    route.post("/",(req,res) => {
        console.log(req.body);
        res.send("Server POST")
    });

}


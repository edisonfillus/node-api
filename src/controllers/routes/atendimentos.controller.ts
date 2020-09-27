import {Router, Request, Response} from "express";

const route = Router();

const memoryDatabase = [
    {
        id: 1,
        date: '2020-10-10 10:30:22.223'
    },
    {
        id: 2,
        date: '2020-10-10 10:30:25.125'
    }
]

export const atendimentosController = (app: Router) => {
    app.use("/atendimentos", route);

    route.post("/", (req, res) => {
        const newAtendimento = req.body;
        memoryDatabase.push(newAtendimento);
        res.status(201).send(req.body);
    });

    route.get("/", (req: Request, res: Response) => {
        res.status(200).send(memoryDatabase);
    });

    route.get("/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const result = memoryDatabase.find(elem=>elem.id === id);
        if(result){
            res.status(200).send(result);
        } else {
            res.status(404).send();
        }
    });

    route.patch("/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        const element = memoryDatabase.find(elem=>elem.id === id);
        if(!element) res.status(404).send();
        const changes = req.body;
        Object.assign(element,changes);
        res.status(200).send(element);
    })

    route.put("/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        const toUpdate = req.body;
        const index = memoryDatabase.findIndex(elem=>elem.id === id);
        if(index === -1){
            memoryDatabase.push(toUpdate);
        } else {
            memoryDatabase.splice(index,1,toUpdate);
        }
        res.status(200).send();
    })

    route.delete("/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        const index = memoryDatabase.findIndex(elem=>elem.id === id);
        if(index === -1) res.status(404).send();
        memoryDatabase.splice(index,1);
        res.status(204).send();
    })

}


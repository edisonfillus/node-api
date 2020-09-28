import {Router, Request, Response} from "express";

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

export const atendimentosController = () => {

    const router = Router();

    router.post("/atendimentos/", (req, res) => {
        const newAtendimento = req.body;
        memoryDatabase.push(newAtendimento);
        return res.status(201).send(req.body);
    });

    router.get("/atendimentos/", (req: Request, res: Response) => {
        return res.status(200).send(memoryDatabase);
    });

    router.get("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const result = memoryDatabase.find(elem=>elem.id === id);
        if(result){
            return res.status(200).send(result);
        } else {
            return res.status(404).send();
        }
    });

    router.patch("/atendimentos/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        const changes = req.body;

        const allowedFields = ["date"];
        const invalidFields = Object.keys(changes).filter(field=>!allowedFields.includes(field));
        if(invalidFields.length > 0){
            return res.status(400).send({error:"Invalid fields"});
        }
        const element = memoryDatabase.find(elem=>elem.id === id);
        if(!element) res.status(404).send();
        Object.assign(element,changes);
        return res.status(200).send(element);
    })

    router.put("/atendimentos/:id",(req,res)=>{
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

    router.delete("/atendimentos/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        const index = memoryDatabase.findIndex(elem=>elem.id === id);
        if(index === -1) res.status(404).send();
        memoryDatabase.splice(index,1);
        res.status(204).send();
    })

    return router;

}


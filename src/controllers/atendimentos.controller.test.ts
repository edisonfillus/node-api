import request from "supertest";
import {app} from "../app";
import {Atendimento, BASE_PATH} from "./atendimentos.controller";

describe("POST /atendimentos", ()=>{
    it("Should respond 201 if valid request", async()=>{
        const data: Atendimento = {
            id: 3,
            date: "2020-10-10 10:30:28.312"
        }

        const response = await request(app)
            .post(`${BASE_PATH}`)
            .send(data)
            .set('Accept','application/json')
            .expect('Content-Type',/json/)
            .expect(201)

        expect(response.body).toStrictEqual(data);
    })
})

describe("GET /atendimentos",()=>{
    it("Should respond with empty array if no data",async ()=>{
        const expected: Atendimento[] = [];

        const response = await request(app)
            .get(`${BASE_PATH}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)

        expect(response.body).toStrictEqual(expected);
    })
})
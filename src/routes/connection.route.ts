import express from "express";
import { Banker } from "../entities/Banker";
import { Client } from "../entities/Client";

const router = express.Router();

router.post('/banker/:bankerId/client/:clientId', (req, res, next) => {

    const { clientId, bankerId } = req.params;
    Client.findOne(parseInt(clientId))
        .then((client) => {
            if (!client)
                throw new Error("Not Client found");

            return Banker.findOne(parseInt(bankerId))
                .then((banker) => {
                    console.log(banker)
                    if (!banker)
                        throw new Error("Banker Not found");
                    banker.clients = [client]

                    return banker.save()
                })
                .then((response) => {
                    console.log(response)
                    res.json("Banker connected to the client!");
                })
        })
        .catch((error) => res.status(404).send(error))
});
router.get('/connection', (req, res) => {
    res.send('hellos')
});

export {
    router as connectionRouter
}
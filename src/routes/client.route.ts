import express from "express";
import { Client } from "../entities/Client";

const router = express.Router();

router.post('/client', (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body;

    const client: Client = Client.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        balance,
    })

    client.save()
        .then((savedClient) => res.json(client))
        .catch((error) => res.status(500).send(error))

});
router.get('/client/:clientId', (req, res) => {
    const { clientId } = req.params;


});

router.get('/client/all', (req, res) => {

    Client.find()
        .then((clients) => res.json(clients))
        .catch((error) => res.status(500).send(error))
});

router.delete('/client/:clientId', (req, res) => {
    const { clientId } = req.params;

    Client.delete(parseInt(clientId))
        .then((deletedClient) => res.json(deletedClient))
        .catch((error) => res.status(404).send(error))
})
export {
    router as clientRouter
}
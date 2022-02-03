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
        .then((savedClient) =>res.json(client))
        .catch((error) =>  res.status(500).send(error))

});
router.get('/client', (req, res) => {
    res.send('hellos')
});

export {
    router as clientRouter
}
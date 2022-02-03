import express from "express";
import { Banker } from "../entities/Banker";

const router = express.Router();

router.post('/banker', (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber
    } = req.body;

    const banker: Banker = Banker.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        employee_number: employeeNumber,
    })

    banker.save()
        .then((savedBanker) => res.json(banker))
        .catch((error) => res.status(500).send(error))

});
router.get('/banker', (req, res) => {
    res.send('hellos')
});

export {
    router as bankerRouter
}
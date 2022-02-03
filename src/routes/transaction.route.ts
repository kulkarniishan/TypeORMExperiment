import express from "express";
import { Client } from "../entities/Client";
import { Transaction, TransactionTypes } from "../entities/Transaction";

const router = express.Router();

router.post('/client/:clientId/transaction', (req, res, next) => {

    const { clientId } = req.params;
    const { type, amount } = req.body;

    Client.findOne(parseInt(clientId))
        .then((client) => {
            if (!client)
                throw new Error("Not found");

            const transaction = Transaction.create({
                amount,
                type,
                client
            })


            return transaction.save()
                .then((response) => {
                    if (type === TransactionTypes.DEPOSIT) {
                        client.balance += amount;
                    }
                    else if (type === TransactionTypes.WITHDRAW) {
                        client.balance -= amount;
                    }
                    return client.save()
                })
                .then((savedClient) => res.json(client))
        })
        .catch((error) => res.status(404).send(error))
});
router.get('/transaction', (req, res) => {
    res.send('hellos')
});

export {
    router as transactionRouter
}
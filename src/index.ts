import { createConnection, Connection } from "typeorm"
import express from "express";
import { clientRouter } from "./routes/client.route";
import { bankerRouter } from "./routes/banker.route";
import { transactionRouter } from "./routes/transaction.route";
import { connectionRouter } from "./routes/connection.route";

const app = express()
const port: number = 8080;

createConnection()
    .then(() => {
        console.log("Connected to the db")

        //Middlewares
        app.use(express.json())

        //Routes
        app.use('/client',clientRouter)
        app.use('/banker',bankerRouter)
        app.use(transactionRouter)
        app.use(connectionRouter)
        app.use('/',(req,res)=>{
            res.send('done')
        })
        app.listen(port, () => {
            console.log(`The app is listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.error(error)
        throw new Error("Unable to connect to the db")
    })







   // "migrations": [
   //    "src/migration/**/*.ts"
   // ],
   // "subscribers": [
   //    "src/subscriber/**/*.ts"
   // ],
   // "cli": {
   //    "entitiesDir": "src/entity",
   //    "migrationsDir": "src/migration",
   //    "subscribersDir": "src/subscriber"
   // }
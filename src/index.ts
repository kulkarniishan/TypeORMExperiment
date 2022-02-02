console.log("Hello")

import { createConnection, Connection } from "typeorm"
import { Client } from "./entities/client";

var connection: Connection
const connect = async () => {
    try {
        connection = await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "admin",
            password: "password",
            database: "typeorm",
            "synchronize": true,
            entities: [Client]
        })
        console.log(connection)
    }
    catch (error) {
        console.log(connection)

        console.error(error)
        throw new Error("Unable to connect to the db")
    }
}

connect();
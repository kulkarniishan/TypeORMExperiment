console.log("Hello")

import { createConnection, Connection } from "typeorm"

const connect = async () => {
    try {
        const connection: Connection = await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "admin",
            password: "password",
            database: "typeorm"
        })
    }
    catch (error) {
        console.error(error)
        throw new Error("Unable to connect to the db")
    }
}

connect();
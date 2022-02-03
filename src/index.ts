import { createConnection, Connection } from "typeorm"

var connection: Connection
const connect = async () => {
    try {
        connection = await createConnection()
        console.log("Connected to the db")
    }
    catch (error) {
        console.error(error)
        throw new Error("Unable to connect to the db")
    }
}

connect();







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
import 'dotenv/config'
// import { config } from 'dotenv'
// config()
import { createPool } from 'mysql'
const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUserName,
    password: process.env.dbPassword,
    multipleStatements: false,
    connectionLimit: 30
})
export {
    connection
}
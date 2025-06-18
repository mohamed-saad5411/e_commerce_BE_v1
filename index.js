import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import { bootstrap } from './src/utilties/bootstrap.js'

const app = express()
const port = 3000

app.use(express.json())
bootstrap(app)
dbConnection()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
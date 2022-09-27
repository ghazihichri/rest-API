const express = require ("express")
const ConnectDB = require("./Config/ConnectDB")
const ContactRouter = require("./Routes/Contact")


const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

// app.use('/api/Contact',ContactRouter)
app.use('/api/Contact', ContactRouter)



app.listen(process.env.port,console.log(`serveur runnig on the ${process.env.port}`))
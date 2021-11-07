const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json(), express.urlencoded({extended:true}))
app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config")
require('./routes/product.route')(app)

const portNum = 8000
app.listen(portNum, ()=>console.log(`listening on port ${portNum}`))
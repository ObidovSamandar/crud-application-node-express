const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')

require('dotenv').config({path:'config.env'})
const PORT = process.env.PORT || 8080

// configs
app.use(morgan('tiny'))

// mongodb connection
connectDB()

app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,'assets')))

// load routers
app.use('/', require('./server/route/router'))
app.listen(PORT, ()=>console.log(`SERVER IS RUNNIG ON http://localhost:${PORT}`))



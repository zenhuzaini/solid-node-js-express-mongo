const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')

const dbConnect = require('./source/database/database')
dotenv.config()

//middleware express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cors
app.use(cors())

//database
dbConnect()



const productRoutes = require('./source/routes/productRoute')
app.use('/api/v1/product/', productRoutes)


//make a middleware
const myMiddleware = (req, res, next) => {
    console.log('hi hi :D you passed th middleawre..')
    next()
}

//we can use middle ware like this
// app.use(myMiddleware)

//but we can use the middlearwe inside the route
app.get('/', myMiddleware, (req, res, next) => {
    res.send('hello from here!')
})

app.listen(process.env.PORT, () => {
    console.log('I am connected to the serve')
})

//error handler
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("something wrong is happening..");
})
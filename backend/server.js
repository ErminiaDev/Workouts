require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//creates an express app for us
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log('request: ', req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('~#/.~#/.~#/.~ LISTENING on port', process.env.PORT,'~.#/~.#/~.#/~')
        })
    })
    .catch((error) => {
        console.log(error)
    })
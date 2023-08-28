require('dotenv').config()
const express = require('express')

//creates an express app for us
const app = express()

//middleware
app.use((req, res, next) => {
    console.log('request: ', req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('~#/.~#/.~#/.~ LISTENING on port', process.env.PORT,'~.#/~.#/~.#/~')
})
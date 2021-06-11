const express = require('express')
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')
const cors = require('../config/cors')

const app = express()
const PORT = 3003

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(queryParser())
app.use(cors)

app.listen(PORT, () => {
    console.log(`BACKEND is running on port ${PORT}.`)
})

module.exports = app
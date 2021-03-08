const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const app = express()
const api = require('./server/routes/api')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/transactionDB')

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()
// })

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4200

app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
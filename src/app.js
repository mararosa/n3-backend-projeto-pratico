const express = require("express")
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Controle-Allow-Origin", "*")
    res.header(
        "Access-Controle_allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})



module.exports = app

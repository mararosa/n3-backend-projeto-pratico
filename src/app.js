const express = require("express")
const app = express()

// rotas
const index = require("./routes/index") // criei a const que vai requisitar essa rota


app.use(function(req, res, next) {
    res.header("Access-Controle-Allow-Origin", "*")
    res.header(
        "Access-Controle_allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index) // e aqui eu digo que será usado 

module.exports = app

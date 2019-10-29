const express = require("express") // express e tipo uma caixa de ferramentas
const router = express.Router() // pegando a ferramenta router do express

router.get("/", function(req, res) {
    res.status(200).send({
      title: "{reprograma} Projeto Prático",
      version: "0.0.1"
    })
  })
  
  module.exports = router
  
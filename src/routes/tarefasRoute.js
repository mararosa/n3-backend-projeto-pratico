const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

// criando rotas para usar no postman
router.get("/", controller.get)
router.get("/tarefas", controller.get)
router.get("/concluido", controller.getConcluido)
router.get("/:id", controller.getById)
router.get("/funcionarios/:nomeColaborador", controller.getByNomeColaborador)



// torna disponivel para toda aplicacao
module.exports = router
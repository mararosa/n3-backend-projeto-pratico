const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

// criando rotas para usar no postman
router.get("/", controller.get)
router.get("/tarefas", controller.get) 
router.get("/concluido/filtrar", controller.getConcluido)
router.get("/dataInclusao", controller.getInclusao)
router.get("/:id", controller.getById)
router.get("/:nomeColaborador/buscar", controller.getByNome) 




// torna disponivel para toda aplicacao
module.exports = router
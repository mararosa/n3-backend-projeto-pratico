const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

// criando rotas para usar no postman
router.get("/", controller.get)
// router.get("/tarefas", controller.get) nao precisa estar aqui, pois tudo depois do barra trara o tarefas
router.get("/concluido", controller.getConcluido)
router.get("/:id", controller.getById)
router.get("/funcionarios/:nomeColaborador", controller.getByNomeColaborador) // ex users e user



// torna disponivel para toda aplicacao
module.exports = router
const tarefas = require("../model/tarefas.json") 

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
  }

  exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 0 && id < 5) {
        res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
    }
       res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")
  }

  exports.getConcluido = (req, res) => {
    const tarefasConcluidas = tarefas.filter(tarefa => {
      console.log(tarefa)
       return tarefa.concluido == "true"
    })
  
    res.status(200).send(tarefasConcluidas)
  }

  exports.getByNomeColaborador = (req, res) => {
    const nome = req.params.nomeColaborador
    console.log(nome);
    const funcionarios = tarefas.filter(funcionarios => {
      
      return funcionarios.nomeColaborador == nome
    })
  
    res.status(200).send(funcionarios)
  }

const tarefas = require("../model/tarefas.json");

exports.get = (req, res) => {
  console.log(req.url);
  res.status(200).send(tarefas);
};

exports.getById = (req, res) => {
  const id = req.params.id;
  if (id > 0 && id < 5) {
    res.status(200).send(tarefas.find(tarefas => tarefas.id == id));
  }
  res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack");
};

exports.getConcluido = (req, res) => {
  const tarefasConcluidas = tarefas.filter(verificarConcluidas => {
    return verificarConcluidas.concluido == "true";
  });

  res.status(200).send(tarefasConcluidas);
};

exports.getByNome = (req, res) => {
  const nome = req.params.nomeColaborador;
  const funcionarios = tarefas.filter(verificarNome => {
    return verificarNome.nomeColaborador == nome;
  });

  res.status(200).send(funcionarios);
};

exports.getInclusao = (req, res) => {
  const data = tarefas.sort(function(a, b) {
    if (a.dataInclusao > b.dataInclusao) {
      return 1;
    }
    if (a.dataInclusao < b.dataInclusao) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  res.status(200).send(data);
};

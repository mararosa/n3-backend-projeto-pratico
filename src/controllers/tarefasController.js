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
  res.redirect(303, "https://httpstatusdogs.com/303-see-other");
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
////////////////////

function converterStringParaData(data){
  const dataUsandoSplit = data.split("/");
  const dataConcatenarTraco = dataUsandoSplit[1] + '-' + dataUsandoSplit[0] + '-' + dataUsandoSplit[2];
  const dataConcatenada = new Date(dataConcatenarTraco);
  return dataConcatenada;
}

  exports.getInclusao = (req, res) => {
  const dataParaOrdenar = tarefas.sort(function(a, b) {
    if (converterStringParaData(a.dataInclusao) < converterStringParaData(b.dataInclusao)) {
      return 1;
    }
    if (converterStringParaData(a.dataInclusao) > converterStringParaData(b.dataInclusao)) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  res.status(200).send(dataParaOrdenar);
};

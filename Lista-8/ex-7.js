const input = require('readline-sync');

const historicoMatematico = {
  operacao: "Soma",
  valoresParticipantes: [5, 10, 15, 20, 25]
};

function listaParticipantes() {
  
  let i = input.questionInt("Qual e o numero do participante (0 a 4): ");

  
  if (i < 0 || i >= historicoMatematico.valoresParticipantes.length) {
    console.log("Erro: Não há participante com esse número!");
  } else {

    console.log(`Operação realizada: ${historicoMatematico.operacao}`);
    console.log(`O valor do participante ${i} é: ${historicoMatematico.valoresParticipantes[i]}`);
  }
}

listaParticipantes();
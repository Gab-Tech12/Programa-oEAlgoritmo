/* 9. Sistema de Caixa Eletrônico
Crie um objeto representando uma conta com agência, número da conta, senha, saldo e histórico de operações. Crie um sistema com as funções:

validar acesso (recebe agência, conta e senha)
exibir saldo
realizar saque (somente se houver saldo)
No saque, exiba a quantidade de cédulas entregues usando as notas: 100, 50, 20 e 10, utilizando o menor número possível de cédulas.*/

const contaBancaria = {
  agencia: "1234",
  numeroConta: "55667-8",
  senha: "999",
  saldo: 1550.00,
  historico: []
};

// 1. Validar Acesso
function validarAcesso(agencia, conta, senha) {
  return contaBancaria.agencia === agencia && 
         contaBancaria.numeroConta === conta && 
         contaBancaria.senha === senha;
}

function exibirSaldo() {
  console.log(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
}

function realizarSaque(valorSaque) {
  if (valorSaque > contaBancaria.saldo) {
    console.log("Erro: Saldo insuficiente.");
    return;
  }
  if (valorSaque % 10 !== 0) {
    console.log("Erro: Valor deve ser múltiplo de R$ 10.");
    return;
  }

  // Atualiza a conta
  contaBancaria.saldo -= valorSaque;
  contaBancaria.historico.push(`Saque: -R$ ${valorSaque}`);

  console.log(`\n--- Saque de R$ ${valorSaque} realizado ---`);
  
  // Array com as notas disponíveis (da maior para a menor)
  const notas = [100, 50, 20, 10];
  let restante = valorSaque;

  // Um único laço calcula todas as notas para você
  for (let i = 0; i < notas.length; i++) {
    let notaAtual = notas[i];
    
    // Quantas notas desse valor cabem no que resta?
    let quantidadeNotas = Math.floor(restante / notaAtual); 
    
    if (quantidadeNotas > 0) {
      console.log(`${quantidadeNotas} nota(s) de R$ ${notaAtual}`);
    }
    
    // Atualiza o que sobrou para a próxima nota do laço
    restante = restante % notaAtual; 
  }
}
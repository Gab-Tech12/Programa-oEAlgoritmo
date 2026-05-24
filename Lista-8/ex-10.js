const sistemaEscolar = {
  nomeDoAluno: "Guilherme", notas: [8, 9, 7, 10],
  calcularMediaGeral: function() {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    
    return soma / this.notas.length;
  }
};

const mediaFinal = sistemaEscolar.calcularMediaGeral();
console.log(`A média do aluno ${sistemaEscolar.nomeDoAluno} é: ${mediaFinal}`);
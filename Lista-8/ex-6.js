function gerarRelatorio(nomeAluno, status ="Pendente") {
    console.log(`Relatório do Aluno ${nomeAluno} está ${status}`)
}

gerarRelatorio("Guilherme");

gerarRelatorio("Ana" , "Concluído");

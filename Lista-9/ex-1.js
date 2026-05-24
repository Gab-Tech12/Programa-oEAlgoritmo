//um objeto com um aluno qualquer
aluno = {
    nome:"Lucas",
    idade: 28,
    curso:"Desenvolvimento de Sistemas"
}
aluno2 = {
    nome:"Thifany",
    idade: 18,
    curso:"Desenvolvimento de Sistemas"
}
//Thifany esse object aluno serve como um objeto qualquer MAS QUE SEJA ALUNO para que a função dê um retorno
function apresentarAluno(objetAluno){
    return `Olá, Meu nome é ${objetAluno.nome}, tenho ${objetAluno.idade} anos, e faço o curso de ${objetAluno.curso}. `
}
//veja que quando vc troca o aluno={} o resultado muda, dando a função a possibilidade de ser usada sempre que quiser. 
const frasePronta = apresentarAluno(aluno2);
console.log(frasePronta)
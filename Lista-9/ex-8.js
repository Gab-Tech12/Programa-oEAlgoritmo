// 8. Filtrar Pessoas Crie um array de objetos contendo nome e idade. Crie uma função que retorne apenas as pessoas com mais de 18 anos.

const grupoDePessoas = [
    { nome: "Lucas", idade: 16 },
    { nome: "Mariana", idade: 22 },
    { nome: "Pedro", idade: 17 },
    { nome: "Beatriz", idade: 30 },
    { nome: "João", idade: 18 }
];
function filtrarMaioresDeIdade(listaDePessoas) {
    let adultos = [];

    for (let i = 0; i < listaDePessoas.length; i++) {
        let pessoaAtual = listaDePessoas[i];

        
        if (pessoaAtual.idade >= 18) {
            adultos.push(pessoaAtual);
        }
    }

    return adultos;
}
const apenasAdultos = filtrarMaioresDeIdade(grupoDePessoas);
console.log(apenasAdultos);

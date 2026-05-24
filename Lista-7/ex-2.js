const input = require ('readline-sync')
let ind = 0
let vetor = []
for (let cont = 1; cont <= 5 ; cont++) {
    vetor[ind] = input.question(`digite o ${cont}º valor: ` )
    ind++
}
for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
            let aux = vetor[j];
            vetor[j] = vetor[j + 1];
            vetor[j + 1] = aux;
        }
    }
}

console.log(`os valores digitados em ordem crescente é ${vetor}`)
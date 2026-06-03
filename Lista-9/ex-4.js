const input = require("readline-sync")

const listaNomes = ["jose", "Maria", "João", "Guilherme", "Thifany", "Nicole", "Natalie", "Gabriel"];

function chamarNome (nomeBusca) {
    for (let i = 0; i < listaNomes.length; i++) {
    if (listaNomes[i] === nomeBusca) {
        return true
        }
    return false
    }
}
const nomeDigitado = input.question('Digite um nome para buscar na lista: ');

if (chamarNome(nomeDigitado) == true) {
    console.log(`Sucesso: O nome "${nomeDigitado}" está na lista!`);
} else {
    console.log(`Aviso: O nome "${nomeDigitado}" NÃO foi encontrado.`);
}

const input = require('readline-sync')
function calcularAreaRetangulo() {
    b = input.questionInt("Digite o valor da Base: ")
    a = input.questionInt("Digite o valor da área: ")
    return (b * a)}

console.log(`A área do retangulo é ${calcularAreaRetangulo()}`)
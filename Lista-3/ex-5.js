// Exercicio 5 - lista 3
let input = require('readline-sync')
let num1 = input.questionInt("digite o primeiro numero: ")
let num2 = input.questionInt("digite o segundo numero: ")
let soma = num1 + num2
if (soma < 20) {
    console.log(`Os resultados são ${num1 * 10} e ${num2 * 10} `)
}
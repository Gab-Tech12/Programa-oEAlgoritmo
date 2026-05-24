// Exercicio 8 - lista 3
let input = require('readline-sync')
let num1 = input.questionInt("digite o 1º numero: ")
let num2 = input.questionInt("digite o 2º numero: ")
if (num1 == num2) {
    console.log(`o numeros digitados são iguais a ${num1}`)
    console.log(num2)
}

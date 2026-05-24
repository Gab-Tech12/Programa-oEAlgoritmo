// Exercicio 7 - lista 3
let input = require('readline-sync')
let num1 = input.questionInt("digite o primeiro numero: ")
let num2 = input.questionInt("digite o segundo numero: ")
let num3 = input.questionInt("digite o terceiro numero: ")
let resp = num1 + num2 + num3
if (resp > 20) {
    console.log(`a soma dos numeros digitados é ${resp}`)
}

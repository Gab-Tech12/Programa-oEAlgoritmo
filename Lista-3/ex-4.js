// Exercicio 4 - lista 3
let input = require('readline-sync')
let num1 = input.questionInt("digite o 1º numero: ")
let num2 = input.questionInt("digite o 2º numero: ")
let num3 = input.questionInt("digite o 3º numero: ")
let resp1 = num1 + 5
let resp2 = num2 + 5
let resp3 = num3 + 5
if (resp1 > 10) {
    console.log(resp1)
}
if (resp2 > 10) {
    console.log(resp2)
}
if (resp3 > 10) {
    console.log(resp3)
}

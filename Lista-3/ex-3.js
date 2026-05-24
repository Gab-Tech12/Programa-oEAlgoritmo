// Exercicio 3 - lista 3
let input = require('readline-sync')
let num = input.questionInt("digite um numero: ")
let resp = num - 10
if (resp > 3) {
    console.log("o resultado é:" + resp)
}
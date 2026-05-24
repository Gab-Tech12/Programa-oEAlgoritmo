// Exercicio 2 - lista 3
let input = require('readline-sync')
let num = input.questionInt("digite um numero: ")
let resp = num + 5
if (resp > 10) {
    console.log(`o resultado foi ${resp}`)
}
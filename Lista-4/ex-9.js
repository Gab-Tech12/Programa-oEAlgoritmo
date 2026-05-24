const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")
let num3 = input.questionInt("digite outro numero: ")
let num4 = input.questionInt("digite outro numero: ")
num1 = num1 + 2
num2 = num2 + 2
num3 = num3 - 2
num4 = num4 - 2 
resp = num1 + num2 + num3 + num4
if (resp > 10) {
    console.log("resultado é maior que dez!!")
} else {
    console.log("resultado é menor ou igual a dez!")
    
}
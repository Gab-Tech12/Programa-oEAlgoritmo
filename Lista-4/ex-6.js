const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")
if (num1 >= num2) {
    console.log(`a sequencia é ${num2},${num1}`)
} else if (num2 >= num1) {
    console.log(`a sequencia é ${num1},${num2}`)
}
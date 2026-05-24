const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")
if (num1 >= num2) {
    num2 = num2 * 10
    num1 = num1 / 2
} else {
    num1 = num1 * 10
    num2 = num2 / 2
}
resp = num1 + num2
if (resp % 2 == 0) {
    console.log(`o resultado é par = ${resp}`)
} else {
    console.log(`o resultado é Impar = ${resp}`)
}
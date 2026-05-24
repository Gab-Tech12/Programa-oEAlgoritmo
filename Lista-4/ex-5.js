const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")
let num3 = input.questionInt("digite outro numero: ")
if (num1 <= num2 && num1 <= num3) {
    num1 = num1 + 5
    console.log(`${num1}`)
} else if (num2 <= num1 && num2 <= num3) {
    num2 = num2+5
    console.log(`${num2}`)
} else {
    num3 = num3 + 5
    console.log(`${num3}`)
}
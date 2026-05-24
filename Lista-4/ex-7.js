const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")
let num3 = input.questionInt("digite outro numero: ")

if (num1 >= num2 && num2 >= num3) {
    console.log(`a ordem crescente dos valores são: ${num3}, ${num2}, ${num1}.`)
} else if (num1 >= num3 && num3 >= num2) {
    console.log(`a ordem crescente dos valores são: ${num2}, ${num3}, ${num1}.`)
} else if (num2 >= num1 && num1 >= num3 ) {
    console.log(`a ordem crescente dos valores são: ${num3}, ${num1}, ${num2}.`)
} else if (num2 >= num3 && num3 >= num1){
    console.log(`a ordem crescente dos valores são: ${num1}, ${num3}, ${num2}.`)
} else if (num3 >= num1 && num1 >= num2 ) {
    console.log(`a ordem crescente dos valores são: ${num2}, ${num1}, ${num3}.`)
} else {
    console.log(`a ordem crescente dos valores são: ${num1}, ${num2}, ${num3}.`)
}
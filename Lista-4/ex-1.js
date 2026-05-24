const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")
if (num1 > num2) {
    console.log(`
        o numero ${num2} é o menor!!! 
        `)
} else {
    console.log(`
        o numero ${num1} é menor `)
}

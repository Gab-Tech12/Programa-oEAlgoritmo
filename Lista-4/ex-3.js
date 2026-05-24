const input = require('readline-sync')
let num = input.questionInt("digite um numero: ")
if (num > 10) {
    console.log(`o numero ${num} é maior que dez`)
} else{
    console.log(
        `
        o numero ${num} é menor ou igual a dez `
    )
}
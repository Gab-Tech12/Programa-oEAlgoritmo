const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")

if (num1 > num2) {
    num2 = num2 + 5
} else {
    num1 = num1 + 5
}
if (num1 > num2) {
    console.log(`
        o numero ${num1} é o maior que ${num2}`)
} else {
    console.log(`
        o numero ${num2} é o maior que o ${num1}`
    )
}

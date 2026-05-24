const input = require('readline-sync')
let num1 = input.questionInt("digite um numero: ")
let num2 = input.questionInt("digite outro numero: ")
let num3 = input.questionInt("digite outro numero: ")
if (num1 >= num2 && num1 >= num3) {
    console.log(`
        o numero ${num1} é o maior dentre os valores`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(
        `o numero ${num2} é o maior dentre os valores;`
    )
} else {
   console.log(
        `o numero ${num3} é o maior dentre os valores;`
    )
}
const input = require('readline-sync')
let num = input.questionInt("digite um numero: ")
if (num > 10) {
    num = num + 5 
} else {
    num = num + 20
}
if (num > 25) {
    console.log ("o resultado é: " + num)
} else {
    console.log ("o valor digitado é significativamente baixo")
}
const input = require ('readline-sync')

num = input.questionInt('digite um numero: ')
while (num > 10) {
    num = input.questionInt('digite outro numero: ')
} 
console.log (`${num}`)
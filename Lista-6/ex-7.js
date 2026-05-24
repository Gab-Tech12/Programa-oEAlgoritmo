const input = require('readline-sync')
num1 = input.questionInt('digite o primeiro numero: ')
num2 = input.questionInt('digite o segundo numero: ')
while (num1 < 10) {
    num1 = input.questionInt('digite outro numero: ')
}
while (num2 > 5) {
   num2 = input.questionInt('digite outro numero: ') 
}
console.log(`Os numero são ${num1} e ${num2}`)
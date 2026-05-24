const input = require ('readline-sync')
num1 = input.questionInt('digite o primeiro numero: ')
num2 = input.questionInt('digite o segundo numero: ')
if (num1 > num2) {
     num2 = num2 + 1
    while (num1 > num2){
        num1 = num1 - 1 
        console.log(num1)
    }
} else {
    num2 = num2 - 1 
    while (num1 < num2) { 
        num1 = num1 + 1
        console.log(num1)
    }
}
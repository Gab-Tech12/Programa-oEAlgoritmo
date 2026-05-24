const input = require('readline-sync')
num1 = input.questionInt('digite o primeiro numero: ')
num2 = input.questionInt('digite o segundo numero: ')
num3 = input.questionInt('digite o terceiro numero: ')
if (num1 >= num2 && num2 >= num3) {
    num2 = num2 + 1
    while (num1 > num2) {
        num1 = num1 - 1
        console.log(num1)
    }
} else if (num1 >= num3 >= num2) {
    num3 = num3 + 1
    while (num1 > num3) {
        num1 = num1 - 1
        console.log(num1)
    }
} else if (num2 >= num1 && num1 >= num3) {
    num1 = num1 + 1
    while (num2 > num1) {
        num2 = num2 - 1
        console.log(num2)
    }
} else if (num2 >= num3 && num3 >= num1) {
    num3 = num3 + 1
    while (num2 > num3) {
        num2 = num2 - 1
        console.log(num2)
    }
} else if (num3 >= num1 && num1 >= num2) {
    num1 = num1 + 1
    while (num3 > num1)
        num3 = num3 - 1
    console.log(num3)
} else {
    num2 = num2 + 1
    while (num3 > num2) {
        num3 = num3 - 1
        console.log(num3)
    }
} 

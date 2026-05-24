const input = require('readline-sync')
num1 = input.questionInt('digite o primeiro numero: ')
while (num1 >= 5) {
    num1 = input.questionInt('digite o outro numero: ')
}
while (num1 < 19) {
    num1 = num1+1
    if (num1 % 2 == 0) {
        console.log(num1)

    }
}
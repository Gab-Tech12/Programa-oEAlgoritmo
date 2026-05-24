const input = require ('readline-sync')
num = input.questionInt('digite um numero: ')
if (num > 20) {
    while (num > 21){
        num = num - 1 
        console.log(num)
    }
} else {
    while (num < 19) {
        num = num + 1
        console.log(num)
    }
}
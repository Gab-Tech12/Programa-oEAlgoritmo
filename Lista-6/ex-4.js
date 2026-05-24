const input = require ('readline-sync')
let num = input.questionInt('digite um numero o qual deseja saber a  tabela : ')
let contador = 1
while (contador < 11) {
    console.log(`${contador} X ${num} = ${contador * num }`)
    contador = contador + 1 
        
    }

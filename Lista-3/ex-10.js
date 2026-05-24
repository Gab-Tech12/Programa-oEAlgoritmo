// Exercicio 1 - lista 3
let input = require('readline-sync')
let num = input.questionInt("digite um numero: ")
let resp = num
if (num < 10) {
    console.log(`A tabuada do ${num} é:`)
    console.log(` ${num} X 1 = ${num}  `)
    resp = num * 2
    console.log(` ${num} X 2 = ${resp}  `)
    resp = num * 3
    console.log(` ${num} X 3 = ${resp}  `)
    resp = num * 4
    console.log(` ${num} X 4 = ${resp}  `)
    resp = num * 5
    console.log(` ${num} X 5 = ${resp}  `)
    resp = num * 6
    console.log(` ${num} X 6 = ${resp}  `)
    resp = num * 7
    console.log(` ${num} X 7 = ${resp}  `)
    resp = num * 8
    console.log(` ${num} X 8 = ${resp}  `)
    resp = num * 9
    console.log(` ${num} X 9 = ${resp}  `)
    resp = num * 10
    console.log(` ${num} X 10 = ${resp}  `)

} else{
    console.log(`SISTEMA RECOMENDA QUE O NUMERO DIGITADO (${num}) SEJA MENOR QUE 10 `)
}
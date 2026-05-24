const input = require ('readline-sync')
let ind = 0
let Notas = []
let media = 0
for (let cont = 1; cont <= 4 ; cont++) {
    Notas[ind] = input.question(`digite a ${cont}º nota: ` )
    media = Number(Notas[ind]) + media
    ind++
}

console.log(`-----------------AVALIAÇÃO DE NOTAS ---------------------------
     NOTAS:  ${Notas} 
     MEDIA:  ${media/Notas.length}
     ---------------------------------------------------------------------`)
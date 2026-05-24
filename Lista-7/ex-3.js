const input = require ('readline-sync')
let ind = 0
let Notas1 = []
let Notas2 = []
let Notas3 = []
let Notas4 = []
let Notas5 = []
let media1 = 0;
let media2 = 0;
let media3 = 0;
let media4 = 0;
let media5 = 0;
for (let cont = 1; cont <= 4 ; cont++) {
    Notas1[ind] = input.question(`digite a ${cont}º nota do aluno1: ` )
    media1 = Number(Notas1[ind]) + media1
    ind++
}

ind = 0;

for (let cont = 1; cont <= 4 ; cont++) {
    
    Notas2[ind] = input.question(`digite a ${cont}º nota do aluno2: ` )
    media2 = Number(Notas2[ind]) + media2
    ind++
}


ind = 0;

for (let cont = 1; cont <= 4 ; cont++) {
    
    Notas3[ind] = input.question(`digite a ${cont}º nota do aluno3: ` )
    media3 = Number(Notas3[ind]) + media3
    ind++
}
ind = 0;

for (let cont = 1; cont <= 4 ; cont++) {
    
    Notas4[ind] = input.question(`digite a ${cont}º nota do aluno3: ` )
    media4 = Number(Notas4[ind]) + media4
    ind++
}
ind = 0;

for (let cont = 1; cont <= 4 ; cont++) {
    
    Notas5[ind] = input.question(`digite a ${cont}º nota do aluno3: ` )
    media5 = Number(Notas5[ind]) + media5
    ind++
}
console.log(`---------------------NOTAS_ALUNOS-------------------------`)
console.log( `
    ALUNO 1 NOTAS:  ${Notas1} 
    MEDIA:  ${media1/Notas1.length}
    ALUNO 2 NOTAS:  ${Notas2} 
    MEDIA:  ${media2/Notas2.length} 
    ALUNO 3 NOTAS:  ${Notas3} 
    MEDIA:  ${media3/Notas3.length} 
    ALUNO 4 NOTAS:  ${Notas4} 
    MEDIA:  ${media4/Notas4.length}
    ALUNO 5 NOTAS:  ${Notas5} 
    MEDIA:  ${media5/Notas5.length} 
    --------------------------------------------------------------------`)
    

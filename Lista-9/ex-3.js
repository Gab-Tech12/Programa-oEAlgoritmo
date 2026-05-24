const alunosId = [[5.0,5.5,10.0,6.5],
                [5.5,5.0,8.0,10.0],
                [10.0,7.5,2.5,0],
                [5.0,5.5,5.5,5.5]
            ]

function calcularMedia(arrayDeNotas) {
    if (arrayDeNotas.length === 0) {
        return 0;
    }
    let soma = 0;
    for (let i = 0; i < arrayDeNotas.length; i++) {
        soma = soma + arrayDeNotas[i]; 
       
    }
    const media = soma / arrayDeNotas.length;

    return media;
}
// TESTE

const mediaFinal = calcularMedia(alunosId[3])
console.log(`A média final é: ${mediaFinal}`);


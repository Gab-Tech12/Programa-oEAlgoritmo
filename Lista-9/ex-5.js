vetorTeste = [1,1,2,3,4,5,6,7,7,7,8,8,8,9,9,9,10,10,10,1,20,20,20,30,40,40,40]
vetorTeste2 = [2,2,2,2,3,3,3,3,3,5,5,5,5,5,5,6,6,6,6,6,6,8,8,8,8,8,8,9,99,9]

function contarOcorrencia (array=[]) {
     let contagem ={}

    for (const elemento of array) {
        if (contagem[elemento]) {
        contagem[elemento] += 1; 
        } else {
         contagem[elemento] = 1;
        }
        
    }
    return contagem
}
const resultado = contarOcorrencia(vetorTeste2)

console.log(resultado)

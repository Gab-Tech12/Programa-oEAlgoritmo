let listaDeProvas = [
    {disciplina: "matematica" , notaTirada: 8.5},
    {disciplina: "Logica de programação" , notaTirada: 10.0},
    {disciplina: "banco de dados" , notaTirada: 4.5}
];

function filtraAprovados (listaDeProvas) {
    for (let i = 0; i < listaDeProvas.length; i++) {
         if (listaDeProvas[i].notaTirada >= 6) {
        console.log(`está aprovado em ${listaDeProvas[i].disciplina} com a nota ${listaDeProvas[i].notaTirada}`)
        } 
    }
}
    
filtraAprovados(listaDeProvas);
//6. Biblioteca -  Crie um array de objetos representando livros com título, autor e ano. Crie uma função que retorne apenas os livros publicados depois de 2010

const biblioteca = [
    { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 },
    { titulo: "Sapiens", autor: "Yuval Noah Harari", ano: 2011 },
    { titulo: "Código Limpo", autor: "Robert C. Martin", ano: 2008 },
    { titulo: "Hábitos Atômicos", autor: "James Clear", ano: 2018 },
    { titulo: "Torto Arado", autor: "Itamar Vieira Junior", ano: 2019 }
];

function livrosDepoisDe2010(listaDeLivros) {
    let livrosFiltrados =[]
    for (let i = 0; i < listaDeLivros.length; i++) {
        let livroAtual = listaDeLivros[i];
        if (livroAtual.ano > 2010) {
            livrosFiltrados.push(livroAtual)
        }
    }
    return livrosFiltrados;

}

console.log(livrosDepoisDe2010(biblioteca));

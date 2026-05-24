const listaDeProdutos = [
    { nome: "Café Gourmet", preco: 72.00 },
    { nome: "Leite", preco: 5.50 },
    { nome: "Picanha", preco: 150.50 } // Faz o L
];

function filtroPreco(arrayProdutos) {
    const produtosFiltrados = []; 
    for (let i = 0; i < arrayProdutos.length; i++) {
        if (arrayProdutos[i].preco > 50) {     
            produtosFiltrados.push(arrayProdutos[i]); 
        }
    }
    
    return produtosFiltrados;
}

// Teste
let produtosAcimaDe50 = filtroPreco(listaDeProdutos);
console.log(produtosAcimaDe50);
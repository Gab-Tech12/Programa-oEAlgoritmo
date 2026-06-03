//7. Carrinho de Compras - Crie um array com objetos de itens (nome, quantidade, preço). Crie uma função que calcule o valor total do carrinho.

/*const carrinho = [
    { nome: "Camiseta", quantidade: 2, preco: 49.90 },
    { nome: "Calça Jeans", quantidade: 1, preco: 119.00 },
    { nome: "Tênis Esportivo", quantidade: 1, preco: 299.90 },
    { nome: "Meias (par)", quantidade: 3, preco: 15.00 }
];
function calcularTotalCarrinho(itensDoCarrinho) {
    let valorTotal = 0;
    for (let i = 0; i < itensDoCarrinho.length; i++) {
        let itemAtual = itensDoCarrinho[i];
        let subTotal = itemAtual.quantidade * itemAtual.preco;
        valorTotal += subTotal
        
    }
return valorTotal;

}
const totalDaCompra = calcularTotalCarrinho(carrinho);
console.log(`O valor total do carrinho é: R$ ${totalDaCompra}`);
*/

const carrinho = [
    {nome: 'Arroz', quantidade: 2, preco: 20},
    {nome: 'Fejao', quantidade: 4, preco: 15},
    {nome: 'Macarrao', quantidade: 3, preco: 10},
    {nome: 'Carne', quantidade: 1, preco: 50},
    {nome: 'Frango', quantidade: 2, preco: 30},
]

function calcularValorTotal (arraycarrinho = []) {
    let valorTotal = 0
    for (let i = 0; i < arraycarrinho.length; i++) {
        let item = arraycarrinho[i]
        valorTotal += item.quantidade * item.preco
    }
    return valorTotal

}
console.log(calcularValorTotal(carrinho));
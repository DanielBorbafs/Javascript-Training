
/* 01 - Crie um programa que atualize um estoque a cada compra feita de dois produtos específicos */

let EstoqueProdutoA = 200;
let EstoqueProdutoB = 150;

// venda realizada
let VendaProdutoA = 150;
let VendaProdutoB = 150;

let EstoqueAtualProdutoA = EstoqueProdutoA -= VendaProdutoA
let EstoqueAtualProdutoB = EstoqueProdutoB -= VendaProdutoB

console.log("O Total de produtos A no estoque é de: " + EstoqueAtualProdutoA)
console.log("O Total de produtos B no estoque é de: " + EstoqueAtualProdutoB)

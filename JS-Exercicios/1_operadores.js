
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

/* Criar uma calculadora */

function calculadora(a, b, operacao) {
    // Verificar se a e b são números
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Erro: a e b devem ser números";
    }

    // Verificar divisão por zero
    if ((operacao === '/' || operacao === '%') && b === 0) {
        return "Erro: divisão por zero";
    }

    // Realizar a operação
    switch (operacao) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        case '**':
            return a ** b;
        default:
            return "Erro: operação inválida";
    }
}

// Testes
console.log(calculadora(10, 5, '+')); // 15
console.log(calculadora(10, 5, '-')); // 5
console.log(calculadora(10, 5, '*')); // 50
console.log(calculadora(10, 5, '/')); // 2
console.log(calculadora(10, 5, '%')); // 0
console.log(calculadora(10, 5, '**')); // 100000
console.log(calculadora(10, '5', '+')); // "Erro: a e b devem ser números"
console.log(calculadora(10, 0, '/')); // "Erro: divisão por zero"
console.log(calculadora(10, 5, 'x')); // "Erro: operação inválida"


/* exercicio 02 crie uma função que recebe 3 valores e tire a média dos 3 */

function media3(valor1, valor2, valor3) {
    let mediaTotal =  (valor1 + valor2 + valor3) / 3
    return console.log(mediaTotal)
}

media3(10,10,10)



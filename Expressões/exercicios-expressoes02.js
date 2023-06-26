

/* Exercicio 01
Escreva um programa que solicite ao usuário o valor de um produto e o percentual de desconto a ser aplicado. 
Calcule o valor do desconto e o preço final do produto com o desconto. Armazene os resultados em variáveis e exiba-os no console.
*/

const produto = parseFloat(prompt("Qual será o valor de venda do produto?"));
const desconto = parseFloat(prompt("Qual será o valor do desconto?"));

const valorDesconto = produto * (desconto / 100);
const precoFinal = produto - valorDesconto;

console.log("O valor do desconto é: R$" + valorDesconto.toFixed(2));
console.log("O preço final do produto com desconto é: R$" + precoFinal.toFixed(2));

/* Exercicio 02 
Escreva um programa que solicite um número ao usuário e informe se ele é primo ou não
*/
const numeroUsuario = parseInt(prompt("Digite um número"));

let isPrimo = true;

if (numeroUsuario <= 1) {
  isPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numeroUsuario); i++) {
    if (numeroUsuario % i === 0) {
      isPrimo = false;
      break;
    }
  }
}

if (isPrimo) {
  console.log("O número é primo.");
} else {
  console.log("O número não é primo.");
}

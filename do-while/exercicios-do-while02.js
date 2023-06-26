/* Suponhamos que uma loja decide fazer um dia no qual todos produtos saiam por 15% de desconto,
crie um programa utilizando do-while, que puxe o valor do produto quando o vendedor for passar
no caixa, e dê o desconto de 15% automaticamente.
*/
var valorProduto = "";
var count = 0;

do {
  valorProduto = prompt("Digite o valor do produto de acordo com o estoque, digite sair para calcular o desconto.");

  if (valorProduto !== "sair") {
    var valorNum = parseFloat(valorProduto);

    if (!isNaN(valorNum)) {
      count++;
      var valorDesconto = valorNum * (15 / 100);
      var descontoTotal = valorNum - valorDesconto;
      console.log("O produto sairá por " + descontoTotal);
    } else {
      console.log("Valor inválido. Por favor, digite um número válido ou 'sair' para encerrar.");
    }
  }
} while (valorProduto !== "sair");

console.log("Total de produtos processados: " + count);

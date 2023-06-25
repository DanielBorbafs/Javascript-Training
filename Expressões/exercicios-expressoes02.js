/* Exercício 1: Verificação de número primo
Escreva um programa que solicite ao usuário um número inteiro e verifique se ele é um número primo. 
Armazene o resultado em uma variável booleana e exiba-o no console.

Exercício 3: Verificação de palíndromo
Escreva um programa que solicite ao usuário uma palavra ou frase e verifique se ela é um palíndromo
 (ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda, 
    desconsiderando espaços e diferenciação entre letras maiúsculas e minúsculas). 
    Armazene o resultado em uma variável booleana e exiba-o no console.

Exercício 4: Cálculo do fatorial
Escreva um programa que solicite ao usuário um número inteiro positivo e calcule o seu fatorial. 
Armazene o resultado em uma variável e exiba-o no console.

Exercício 5: Verificação de triângulo
Escreva um programa que solicite ao usuário as medidas de três lados de um triângulo
 e verifique se é possível formar um triângulo com essas medidas. Armazene o resultado em uma variável booleana e exiba-o no console.*/

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

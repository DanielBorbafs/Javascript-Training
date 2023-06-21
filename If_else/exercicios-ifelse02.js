/* 
Exercício 1: Verificação de número positivo/negativo:
Escreva um programa que solicite ao usuário um número e verifique se ele é positivo,
 negativo ou zero. Exiba uma mensagem correspondente no console.

Exercício 2: Verificação de idade:
Escreva um programa que solicite ao usuário sua idade e exiba uma mensagem dizendo se ele é maior de idade ou menor de idade.

Exercício 3: Verificação de login:
Crie um programa que solicite ao usuário um nome de usuário e uma senha.
 Verifique se as informações correspondem a um login válido e exiba uma mensagem de boas-vindas 
 se o login for bem-sucedido. Caso contrário, exiba uma mensagem de erro.

Exercício 4: Verificação de número par ou ímpar:
Crie um programa que solicite ao usuário um número inteiro e exiba uma mensagem dizendo se o número é par ou ímpar.

Exercício 5: Verificação de dia da semana:
Escreva um programa que solicite ao usuário um número de 1 a 7, representando um dia da semana, 
e exiba uma mensagem correspondente ao dia da semana (por exemplo, "Domingo", "Segunda-feira", etc.).

*/

// Exercicio 02
const idade = prompt("Digite sua idade")

if (idade >= 18 ) {
    console.log("Voce e maior de idade")
} else {
    console.log("Voce é menor de idade")
}

// Exercicio 04
const numero = prompt("digite um número")
if ( numero % 2 === 0) {
    console.log("O numero " + numero + " é par")
} else {
    console.log("O numero " + numero + " é Impar")
}

// Exercicio 05

const
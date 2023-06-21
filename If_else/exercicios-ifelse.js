
/*  Exercicio 01
Verificação de idade: Escreva um programa que solicite ao usuário sua idade 
e exiba uma mensagem dizendo se ele é maior de idade ou menor de idade.*/

const idade = parseInt(prompt ("Digite sua idade"));

if (idade >=18) {
    console.log("Voce é maior de didade.");
} else {
    console.log("Você é menor de idade.");
}


/* Exercicio 02
Verificação de login: Crie um programa que solicite ao usuário um nome de usuário e uma senha. 
Verifique se as informações correspondem a um login válido e exiba uma mensagem de boas-vindas 
se o login for bem-sucedido. Caso contrário, exiba uma mensagem de erro.*/

// Informações de login válidas
const usuarioValido = "admin";
const senhaValida = "senha123";

// Solicita nome de usuário e senha
const nomeUsuario = prompt("Digite seu nome de usuário:");
const senha = prompt("Digite sua senha:");

// Verifica se as informações correspondem ao login válido
if (nomeUsuario === usuarioValido && senha === senhaValida) {
  console.log("Login bem-sucedido. Bem-vindo, " + nomeUsuario + "!");
} else {
  console.log("Erro de login. Verifique suas informações de acesso.");
}


/* Exercicio 03
Verificação de número par ou ímpar: Crie um programa que solicite ao usuário um número inteiro
 e exiba uma mensagem dizendo se o número é par ou ímpar.
*/
const numero = prompt("digite um número")
if ( numero % 2 === 0) {
    console.log("O numero " + numero + " é par")
} else {
    console.log("O numero " + numero + " é Impar")
}


const nota1 = prompt("Escolha a primeira nota")
const nota2 = prompt("Escolha a segunda nota")
const nota3 = prompt("Escolha a terceira nota")


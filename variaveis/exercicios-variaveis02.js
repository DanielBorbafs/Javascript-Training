/* Exercicios
Exercício 1: Cálculo de Idade
Escreva um programa que solicite ao usuário seu ano de nascimento e calcule sua idade com base no ano atual.
 Armazene o valor da idade em uma variável e exiba-o no console.

Exercício 2: Troca de Valores
Crie duas variáveis, a e b, com valores iniciais. Em seguida,
 troque o valor dessas variáveis sem utilizar uma terceira variável temporária.


Exercício 3: Concatenação de Strings
Crie duas variáveis, nome e sobrenome, e atribua a elas seus respectivos nomes. 
Em seguida, crie uma terceira variável chamada nomeCompleto que concatene o nome e o sobrenome separados por um espaço.
 Exiba o valor da variável nomeCompleto no console.

Exercício 4: Conversão de Tipos
Declare uma variável numero e atribua a ela o valor numérico 10. Em seguida, converta esse valor para uma string
 e armazene-o em outra variável chamada texto. Exiba o valor da variável texto no console.

Exercício 5: Operações Matemáticas
Crie duas variáveis numéricas, x e y, com valores iniciais. 
Realize as seguintes operações matemáticas e exiba os resultados no console:
Soma de x e y
Subtração de x por y
Multiplicação de x por y
Divisão de x por y
Resto da divisão de x por y
*/

// Exercicio 04 
let numero = 10
let texto = numero.toString()
console.log(texto)
console.log(typeof texto)

// Exercicio 01 
const getIdadeUsuario = (prompt("Qual o ano que você nasceu?"))
const idadeUsuario = 2023 - getIdadeUsuario
console.log("Voce possui  " + idadeUsuario + " anos" )
//ou
const anoNascimento = parseInt(prompt("Qual o ano que você nasceu?"));
const anoAtual = new Date().getFullYear();
const idadeUsuario = anoAtual - anoNascimento;
console.log("Você possui " + idadeUsuario + " anos");


// Exercicio 02

let a = 5;
let b = 10;

[a,b] = [b,a]
console.log("a =", a)
console.log("b = ", b)


// Exercicio 03
const nome = "Daniel"
const sobrenome = "Borba"
const nomeCompleto = (nome + " " + sobrenome)
console.log(nomeCompleto)

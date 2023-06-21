/* Exercício 1:Calcule a área de um retângulo com base e altura fornecidas. 
Atribua o resultado a uma variável chamada area e exiba o valor no console. */ 
const areaRetBase = 40
const areaRetAlt = 20
const areaTotal = 40 * 20
console.log(" A área do retângulo é " + areaTotal + " cm")


/* Converta uma temperatura de graus Celsius para Fahrenheit. Dada uma temperatura em graus Celsius, 
atribua a conversão para Fahrenheit a uma variável chamada fahrenheit e exiba o resultado no console.*/

const celsiusTemp = 90;
let fahrenheit =celsiusTemp * 1.8 + 32;
console.log(fahrenheit);

/* Arrow Functions:*/

const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

var temperaturaCelsius = 15;
var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
console.log(temperaturaFahrenheit); // Output: 59

/* 
Exercicio 04

Verifique se um numero é par, crie uma expressão que retorne true se um número fornecido for par
e false caso contrário. atribua o resultado a uma variável chamada Ispar
*/
const numero = 10;

const isPar = numero % 2 === 0;
console.log(isPar);

// se for impar
const numero = 5; 
const isImpar = numero  % 2 !!=0;
console.log(isImpar);

/* Exercicio 05 
Calcule o Preço total de uma compra, dado um preço do produto e a quantidade desejada,
atribua o resultado a uma variável chamada precoTotal e exiba no console. */

const produto = 20
const quantidade = 10
precoTotal = quantidade * produto
console.log(precoTotal)


// Em arrow function 

const calcularPrecoTotal = (precoUnitario, quantidade) => precoUnitario * quantidade

const precoUnitario = 10;
const quantidade = 5;

const precoTotal = calcularPrecoTotal(precoUnitario, quantidade);
console.log(precoTotal)

/* Exercício 1: Verificação de número primo
Escreva um programa que solicite ao usuário um número inteiro e verifique se ele é um número primo. 
Armazene o resultado em uma variável booleana e exiba-o no console.

Exercício 2: Cálculo do desconto
Escreva um programa que solicite ao usuário o valor de um produto e o percentual de desconto a ser aplicado. 
Calcule o valor do desconto e o preço final do produto com o desconto. Armazene os resultados em variáveis e exiba-os no console.

Exercício 3: Cálculo do fatorial
Escreva um programa que solicite ao usuário um número inteiro positivo e calcule o seu fatorial. 
Armazene o resultado em uma variável e exiba-o no console.

Exercício 4: Verificação de triângulo
Escreva um programa que solicite ao usuário as medidas de três lados de um triângulo
 e verifique se é possível formar um triângulo com essas medidas. Armazene o resultado em uma variável booleana e exiba-o no console.*/


 // Exercício 01 
 /*
 Neste exemplo, a função verificarPrimo recebe um número como parâmetro. Ela verifica se o número é menor ou igual a 1,
  retornando false caso seja. Em seguida, ela itera de 2 até a raiz quadrada do número,
   verificando se o número é divisível por algum valor da iteração. Caso seja, retorna false, indicando que o número não é primo. 
   Se o número passar por todas as verificações, é retornado true, indicando que ele é primo.
 
 */ 
 function verificarPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Exemplo de uso da função:
  let numero = 17;
  if (verificarPrimo(numero)) {
    console.log(numero + " é primo");
  } else {
    console.log(numero + " não é primo");
  }
  

// Exercicio 02
const valorProduto = parseInt(prompt("Qual valor do produto?"));
const descontoProduto = (prompt("qual desconto em % ?"))
const valorDesconto = valorProduto * (descontoProduto / 100)
const valorFinal = valorProduto - valorDesconto
console.log("Após o desconto aplicado, o valor da sua compra foi de " +"R$"+ valorFinal)


//Exercicio 03

let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let fatorial = 1;

if (numero >= 0) {
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  
  console.log("O fatorial de " + numero + " é: " + fatorial);
} else {
  console.log("O número deve ser inteiro positivo.");
}


// Exercicio 04 

const ladoA = parseFloat(prompt("Digite o valor do lado A do triângulo:"));
const ladoB = parseFloat(prompt("Digite o valor do lado B do triângulo:"));
const ladoC = parseFloat(prompt("Digite o valor do lado C do triângulo:"));

const formaTriangulo = (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA);

console.log("É possível formar um triângulo? " + formaTriangulo);

/*
Explicação mais detalhada :

Condição dos comprimentos dos lados: A soma de dois lados quaisquer deve ser maior que o comprimento do terceiro lado. 
Em outras palavras:

Se a, b e c são os comprimentos dos lados de um triângulo, então a + b > c, a + c > b e b + c > a.
Condição de não degeneração: Nenhum dos lados do triângulo pode ter comprimento igual a zero (0). 
Ou seja, os lados devem ter comprimentos positivos.


*/
/* Exercício 1: Calcule a área de um retângulo com base e altura fornecidas. 
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
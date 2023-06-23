/* 



Exercício de busca de elemento:
Dado um array de números, escreva um loop for que verifique se um determinado número está presente no array. Se estiver, imprima "Encontrado!" no console; caso contrário, imprima "Não encontrado!".

Exercício de tabuada:
Escreva um loop for aninhado para gerar a tabuada de multiplicação de 1 a 10. Imprima cada resultado no formato "2 x 3 = 6".

Exercício de contagem regressiva:
Escreva um loop for que faça uma contagem regressiva de 10 a 0. Imprima cada número no console e, quando chegar a 0, imprima "Lançamento!".

*/

// 01 - Escreva um loop for que imprima os números de 1 a 10 no console.
for ( let i = 1; i < 11; i++) {
    console.log(i)
}

// 02 - Escreva um loop for que imprima os números de 10 a 1 no console.
for (let i=10; i >= 1; i--) {
    console.log(i)
}


// 03- Dado um array de números, escreva um loop for que calcule e retorne a soma de todos os elementos no array.
let numeros = [10, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);

// 04 - Dado um array de números, escreva um loop for que calcule e retorne o produto de todos os elementos no array.
let meuArray = [2, 3, 4, 5];
let produto = 1;

for (let i = 0; i < meuArray.length; i++) {
  produto *= meuArray[i];
}

console.log(produto);  // Saída: 120
/* Explicação
Este é o loop "for". Vamos percorrer cada elemento do array usando a variável de controle i. Ela começa com o valor 0 (que é o índice do primeiro elemento) e é incrementada em 1 a cada iteração até que seja menor que o comprimento do array (meuArray.length).
Dentro do loop, multiplicamos o valor atual do produto pelo elemento correspondente no meuArray,
usando meuArray[i]. Dessa forma, o produto é atualizado a cada iteração, 
acumulando o resultado da multiplicação de todos os elementos.
*/
// 05 - Dado um array de strings, escreva um loop for que imprima cada elemento no console.

let elogios = ["Bonito", "Educado", "inteligente"]
for (let i = 0; i < elogios.length; i++) {
    console.log(elogios[i])
}
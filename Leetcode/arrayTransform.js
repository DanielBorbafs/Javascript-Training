/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {

};/**
* @param {number[]} arr
* @param {Function} fn
* @return {number[]}
*/
var map = function (arr, fn) {
    let resultArray = []; // Array onde os resultados serão armazenados

    for (let i = 0; i < arr.length; i++) {
        resultArray.push(fn(arr[i], i)); // Aplica a função fn e adiciona ao array de resultados
    }

    return resultArray; // Retorna o novo array com os resultados
};

// Exemplos de uso:

// Exemplo 1:
const arr1 = [1, 2, 3];
const plusone = (n) => n + 1;
console.log(map(arr1, plusone)); // Saída: [2, 3, 4]

// Exemplo 2:
const arr2 = [1, 2, 3];
const plusI = (n, i) => n + i;
console.log(map(arr2, plusI)); // Saída: [1, 3, 5]

// Exemplo 3:
const arr3 = [10, 20, 30];
const constant = () => 42;
console.log(map(arr3, constant)); // Saída: [42, 42, 42]

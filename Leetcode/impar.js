/*Dado um array inteiro arr, retorne verdadeiro se houver três números ímpares consecutivos no array. Caso contrário, retorne falso.
Exemplo 1:

Entrada: arr = [2,6,4,1]
Saída: falso
Explicação: Não existem três probabilidades consecutivas.
Exemplo 2:

Entrada: arr = [1,2,34,3,4,5,7,23,12]
Saída: verdadeiro
Explicação: [5,7,23] são três probabilidades consecutivas.*/



/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let count = 0; // Contador para números ímpares consecutivos

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            // Se o número é ímpar, incrementa o contador
            count++;
            if (count === 3) {
                // Se encontramos três ímpares consecutivos, retornamos true
                return true;
            }
        } else {
            // Se encontramos um número par, resetamos o contador
            count = 0;
        }
    }

    // Se terminar o loop e não encontrar três ímpares consecutivos, retornamos false
    return false;
};

// Exemplos de uso:

// Exemplo 1:
console.log(threeConsecutiveOdds([2, 6, 4, 1])); // Saída: false

// Exemplo 2:
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // Saída: true

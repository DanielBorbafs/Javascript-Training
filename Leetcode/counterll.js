/*
Escreva uma função createCounter. Deve aceitar um init inteiro inicial. Deve retornar um objeto com três funções.

As três funções são:

increment() aumenta o valor atual em 1 e depois o retorna.
decrement() reduz o valor atual em 1 e depois o retorna.
reset() define o valor atual como init e então o retorna.
 

Exemplo 1:

Entrada: init = 5, chamadas = ["incrementar","redefinir","decrementar"]
Saída: [6,5,4]
Explicação:
contador const = criarContador(5);
contador.incremento(); //6
contador.reset(); //5
contador.decremento(); //4
Exemplo 2:

Entrada: init = 0, chamadas = ["incremento","incremento","decremento","reset","reset"]
Saída: [1,2,1,0,0]
Explicação:
contador const = criarContador(0);
contador.incremento(); //1
contador.incremento(); //2
contador.decremento(); //1
contador.reset(); //0
contador.reset(); //0
 

Restrições:

-1000 <= inicialização <= 1000
0 <= chamadas.comprimento <= 1000
chamadas[i] é um de "incrementar", "decrementar" e "redefinir"
*/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    // Inicializa o valor do contador
    let value = init;

    // Retorna um objeto com métodos para incrementar, decrementar e resetar o contador
    return {
        increment: function () {
            value++;
            return value; // Retorna o valor atualizado
        },
        decrement: function () {
            value--;
            return value; // Retorna o valor atualizado
        },
        reset: function () {
            value = init;
            return value; // Retorna o valor inicial após o reset
        }
    };
};

// Exemplo de uso:
const counter = createCounter(5);
console.log(counter.increment()); // Saída: 6
console.log(counter.reset());    // Saída: 5
console.log(counter.decrement()); // Saída: 4

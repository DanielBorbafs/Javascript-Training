/* 
Dado um inteiro  n, retorna uma counterfunção. Esta counterfunção inicialmente retorna  n e então retorna 1 a mais que o valor anterior toda vez subsequente que é chamada ( n, n + 1, n + 2, etc).

 

Exemplo 1:

Entrada: 
n = 10
["chamar","chamar","chamar"]
Saída: [10,11,12]
 Explicação: 
 counter() = 10 // A primeira vez que counter() é chamado, ele retorna n.
counter() = 11 // Retorna 1 a mais que a vez anterior.
counter() = 12 // Retorna 1 a mais que o tempo anterior.
Exemplo 2:

Entrada: 
n = -2
["chamar","chamar","chamar","chamar","chamar"]
Saída: [-2,-1,0,1,2]
 Explicação: counter() inicialmente retorna -2. Então aumenta após cada chamada subsequente.
 

Restrições:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"
*/

var createCounter = function(n) {
    let count = n

    return function(){
        return count++
    };
};

const counter = createCounter(50)
counter()
counter()
counter()

console.log(counter())

const counter2 = createCounter(-2)
console.log(counter2())
console.log(counter2())
console.log(counter2())



console.log(counter2())
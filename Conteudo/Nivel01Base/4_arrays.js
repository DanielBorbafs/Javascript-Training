/* 
Oque é Array?
é uma estrutura de dados que armazena uma coleção ordenada de elementos,
cada elemento pode ser de qualquer tipo de dado, incluindo outros arrays
*/

//Sintaxe 
let frutas = ['Jaca', 'Banana', 'Laranja'];
let estados = new Array('RJ', 'ES', 'SP');

// acessando elementos
console.log(frutas[0]) ;//indice

// Propriedade 'lenght'
console.log(estados.length); // conta quantos elementos tem no array

/*
Alguns métodos úteis
push - Adiciona um elemento no final do array
pop -  Remove o ultimo elemento do array
shift - Remove o primeiro elemento do array.
unshift - Adiciona um ou mais elementos ao início do array.
splice - Modifica o conteúdo de um array, adicionando ou removendo elementos.
map - Cria um novo array com os resultados de uma função aplicada a cada elemento do array original.
filter - filter: Cria um novo array com os elementos que atendem a uma condição especificada.
e etc....
*/
frutas.push('Uva');
console.log(frutas)


// Arrays multimensionais podem conter outros arrays, formando arrays multidimensionais
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matriz[1][2]); // Saída: 6

// Spread Operator - O operador spread (...) pode ser usado para copiar elementos de um array ou para combinar arrays.
let maisFrutas = [...frutas, 'Pera', 'Abacaxi']
console.log(maisFrutas)

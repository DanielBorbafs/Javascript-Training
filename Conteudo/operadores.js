
/*Tipos de Operadores
Operadores aritimeticos(matemáticos)
Operadores de atribuição
Operadoresde comparação
Operadores Lógicos
Operadores Bitwise
*/

// Operadores aritméticos (matemáticos +, -, *, /)

let salario = 100;
console.log(salario + salario);
console.log(salario - salario);


// Operadores de atribuição ( += maiorigual, -= menorigual)
let valorTeclado = 100; 
valorTeclado = valorTeclado + valorTeclado
valorTeclado = valorTeclado += valorTeclado;
console.log(valorTeclado);


// Operadores de igualdade
//( === estrita - compara alem dos valores o tipo)
console.log(1 === 1); //True 
console.log('1' === 1); //False, um é string e o outro number


//( == igualdade solta compara apenas os valores e não o tipo)
console.log(1 == 1); // true
console.log(1 == 1);// true, nao compara o tipo.


//Operadores ternarios - evita em alguns casos o uso de varios IFS


//exemplo se um aluno possuir uma nota maior que 8 ele está acima da média, se for abaixo.. abaixo
let notaAluno1 = 8
let situacaoAluno = notaAluno1 = 8 ? 'Acima da média' : 'Abaixo da média'
console.log(situacaoAluno)



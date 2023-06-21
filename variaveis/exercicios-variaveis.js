/* Exercicio 01 
 Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade ou não. 
 Utilize const para declarar a idade mínima para ser considerado maior de idade.
 */

function verificarMaiorIdade(idade) {
  const idadeMinima = 18;

  if (idade >= idadeMinima) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
// Exemplo de uso da função
console.log(verificarMaiorIdade(20));  // Saída: "Maior de idade"
console.log(verificarMaiorIdade(16));  // Saída: "Menor de idade"


/* Exercicio 02
Temos uma boate e precisamos de um programa que verifica a idade do cliente
e imprima na tela se ele pode entrar ou nao.
a idade minima para frenquentar nossa boate é 22 anos */

function entradaLiberada(idade) {
  const idadeBase = 22;

  if(idade >= idadeBase) {
    return "Seja bem-vindo, Entrada liberada.";
  } else {
    return "Infelizmente pela sua idade, nao poderá entrar."
  }
}
console.log(entradaLiberada(21));
console.log(entradaLiberada(23));

/* OBS: ambos exercícios acima podem ser feito usando expressoes, porém 
o valor terá que ser predefinido antes. exemplo:*/

const minIdade = 22
const idadeAtual = 23

const resultado = idadeAtual >= minIdade ? "Pode entrar" : "Nao pode entrar"

console.log(resultado)

/* Exercício 03 
  Dado o objeto abaixo, faça as seguintes modificações:
    . Modifique a propriedade profissao para 'Desenvolvedora'.
    .  Adicione uma nova propriedade hobbies e atribua a ela um array com pelo menos três hobbies que você goste.
*/
const pessoa = {
  nome: 'Maria',
  idade: 30,
  profissao: 'Engenheira'
};

pessoa.profissao =('Desenvolvedora');

console.log(pessoa)

pessoa.hobbies = ['Jogar Videoagme', 'Passear no parque', 'Surfar'];

console.log(pessoa)

/*
Exercício 04 :
Crie uma função que receba um array de números e retorne a soma de todos os números.
Utilize let para declarar a variável que irá armazenar a soma */

function calcularSomaArray(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

// Exemplo de uso da função
const numerosarray = [1, 2, 3, 4, 5, 2];
console.log(calcularSomaArray(numerosarray));  // Saída: 15



/* OUTRA FORMA */
function calcularSomaArray(numeros) {
  return numeros.reduce((soma, numero) => soma + numero);
}
// Exemplo de uso da função
const numeros = [1, 2, 3, 4, 5];
console.log(calcularSomaArray(numeros));  // Saída: 15


/* Exercício 05 :Dado o array abaixo, faça as seguintes modificações:
. Adicione o número 12 ao final do array.
. Remova o primeiro elemento do array.
. Atribua o valor 0 ao segundo elemento do array
*/
/* adicionando o numero 2*/
const numeros = [2, 4, 6, 8, 10];
numeros.push(12);
console.log(numeros);

// removendo numero 2*/
numeros.splice(0, 1);
console.log(numeros);

/* Allterando um valor */
const array = [2,3,4,5];
array[2] = 3;
array[0] = 3;
array[3] = 3;
console.log(array);


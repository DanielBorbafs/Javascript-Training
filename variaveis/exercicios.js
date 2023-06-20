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


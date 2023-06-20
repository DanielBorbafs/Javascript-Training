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

// Funções declarativas, são carregadas no contexto antes do código ser executado, o que significa que podem ser chamadas em qualquer lugar, mesmo antes de serem declaradas no código. EX:
function soma(a, b) {
  return a + b
}
console.log(soma(2,5));
/*
Expressões de Função (Function Expressions):
Essas são funções definidas como parte de uma expressão. Elas podem ser atribuídas a variáveis ou passadas como argumentos para outras funções.
Elas não são carregadas até que a execução atinja a linha em que estão definidas.
*/
const divisao = function(a,b) {
  return a / b
}
console.log(divisao(10,5));

/*
Arrow Functions:
Uma forma mais concisa de escrever funções em JavaScript introduzida no ECMAScript 6 (ES6).
*/
const subtracao = (a, b) => a - b;
console.log(subtracao(100,60))

/*
Funções Construtoras (Constructor Functions):
São funções usadas para criar objetos em JavaScript.
São usadas com a palavra-chave new para criar instâncias de objetos.
*/

function Cliente(nome,idade) {
  this.nome = nome;
  this.idade = idade;
}
let pessoa01 = new Cliente("Daniel", 24);
console.log(pessoa01)

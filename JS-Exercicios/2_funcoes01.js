// me dê uma função que receba um parâmetro e retorne se o usuário é maior de idade ou não
function getIdade(idade) {
    let idadeget = idade >= 18 ? 'maior de idade' : 'menor de idade'
    return idadeget
}
console.log(getIdade(17));

/* Crie um programa no qual verifica se um número é par */

function isPar(numero) {
    let message = numero % 2 === 0 ? "o Número é par" : "O Número é Impar"
    return console.log(message)
}

isPar(3)

/* Crie uma funcao que recebe dois valores e retorna se eles são iguais ou não */

function compara(a,b){
    let comparacao = a === b ? "é Igual" : "não é igual"
    return console.log(comparacao)
}

compara(10, 10)


/*
Soma Simples de Array
Dado um array de inteiros, encontre a soma de seus elementos.
Por exemplo, se o array for [1, 2, 3], o resultado deve ser 6.

Descrição da Função
Complete a função simpleArraySum abaixo. Ela deve retornar a soma dos elementos do array como um inteiro.

Parâmetros da função simpleArraySum:

ar: um array de inteiros
Formato de Entrada
A primeira linha contém um inteiro n, denotando o tamanho do array.
A segunda linha contém inteiros separados por espaço, representando os elementos do array.
Restrições
Nenhuma restrição específica foi mencionada.
Formato de Saída
Imprima a soma dos elementos do array como um único inteiro.
*/



function simpleArraySum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i ++) {
        sum += ar[i];
    } 
    return sum;
}

const arrayTeste = simpleArraySum([1,2,3])


console.log(arrayTeste)
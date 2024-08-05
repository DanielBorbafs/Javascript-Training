/*Escreva uma função expect que ajude os desenvolvedores a testar seu código. Deve receber qualquer valor val e 
retornar um objeto com as duas funções a seguir.

toBe(val) aceita outro valor e retorna verdadeiro se os dois valores === um ao outro.
 Se eles não forem iguais, deverá gerar um erro "Not Equal".
notToBe(val) aceita outro valor e retorna verdadeiro se os dois valores! == um ao outro
. Se forem iguais, deverá gerar um erro "Igual".
 

Exemplo 1:

Entrada: func = () => expect(5).toBe(5)
Saída: {"valor": verdadeiro}
Explicação: 5 === 5 então esta expressão retorna verdadeiro.
Exemplo 2:

Entrada: func = () => expect(5).toBe(null)
Saída: {"error": "Diferente"}
Explicação: 5 !== null então esta expressão gera o erro "Not Equal".
Exemplo 3:

Entrada: func = () => expect(5).notToBe(null)
Saída: {"valor": verdadeiro}
Explicação: 5 !== null então esta expressão retorna verdadeiro.
*/



/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    const toBe = function (num) {
        if(num=== val) {
            return true
        } else {
            throw new Error('Not Equal')
        }
    }
    const notToBe = function (num) {
        if (num !== val){
            return true
        } else {
            throw new Error('Equal')
        }
    }

return {toBe,notToBe}

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
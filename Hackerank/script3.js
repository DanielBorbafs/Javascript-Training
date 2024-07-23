Escreva uma função  expectque ajude os desenvolvedores a testar seus códigos. Ela deve receber qualquer valor  val e retornar um objeto com as duas funções a seguir.

toBe(val) aceita outro valor e retorna  true se os dois valores  === são iguais. Se não forem iguais, deve lançar um erro  "Not Equal".
notToBe(val) aceita outro valor e retorna  true se os dois valores  !== são iguais. Se forem iguais, deve lançar um erro  "Equal".
 /**
 * @param {string} val
 * @return {Object}
*/
    

var expect = function(val) {
   return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Não é igual");
            }
        }
    };
}


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

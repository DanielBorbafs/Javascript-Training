
// fizzBuzz(1); - Rececebe um valor e segue algumas regras para retornar alguma saida especifica

/* Verifica se o numero é :
     Divisível por 3 = Fizz
     Divisível por 5 = Buzz
     Divisivel por 3 e 5 = FizzBuzz
     nao e divisivel por 3 e 5 = Entrada
     nao é um numero = 'Não é um numero'
*/

function fizzBuzz(entrada) {
  if (entrada % 3 === 0 && entrada % 5 === 0)
		return 'FizzBuzz';
	if(typeof entrada !== 'number')	
		return 'Não é um número';
	if (entrada % 3 === 0)
		return 'Fizz'
	if (entrada % 5 === 0)
		return 'Buzz'
	
	return entrada;
}
const resultado = fizzBuzz('teste')
console.log(resultado)

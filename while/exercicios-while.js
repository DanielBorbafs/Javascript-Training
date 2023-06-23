//Exercício 1: Imprimir os números pares de 0 a 10 usando um loop "while":

var i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}

//Exercício 2: Calcular a soma dos números de 1 a 100 usando um loop "while":
var sum = 0;
var i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log("A soma é: " + sum);

//Imprimir os primeiros 10 números da sequência de Fibonacci usando um loop "while":
var a = 0;
var b = 1;
var count = 0;

while (count < 10) {
  console.log(a);
  var temp = a;
  a = b;
  b = temp + b;
  count++;
}

//Exercício 4: Solicitar ao usuário para digitar um número e calcular o fatorial desse número usando um loop "while":
var number = parseInt(prompt("Digite um número:"));
var factorial = 1;
var i = 1;

while (i <= number) {
  factorial *= i;
  i++;
}

console.log("O fatorial de " + number + " é: " + factorial);

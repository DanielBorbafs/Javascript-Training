// Exercício 1: Solicitar ao usuário para adivinhar um número entre 1 e 10:
var number;
var guessedNumber;

do {
  number = Math.floor(Math.random() * 10) + 1;
  guessedNumber = parseInt(prompt("Adivinhe o número entre 1 e 10:"));

  if (guessedNumber === number) {
    console.log("Parabéns! Você acertou o número.");
  } else {
    console.log("Tente novamente. O número correto era: " + number);
  }
} while (guessedNumber !== number);

//Exercício 2: Imprimir os números de 1 a 5 usando um loop "do-while":
var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

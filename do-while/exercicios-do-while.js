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

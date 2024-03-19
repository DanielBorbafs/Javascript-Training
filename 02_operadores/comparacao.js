// "==" Verifica se dois valores são iguais. Se forem de tipos diferentes, JavaScript tentará converter um dos valores para um tipo compatível antes de fazer a comparação.
console.log(5 == 5);   // true
console.log(5 == "5"); // true (JavaScript converte a string "5" para o número 5)
console.log(5 == 10);  // false

// Verifica se dois valores são diferentes
console.log(5 != 5);   // false
console.log(5 != "5"); // false (JavaScript converte a string "5" para o número 5)
console.log(5 != 10);  // true

// Verifica se dois valores são iguais e também os tipos dos mesmos
console.log(5 === 5);   // true
console.log(5 === "5"); // false (tipos diferentes)
console.log(5 === 10);  // false

// Verifica se os dois valores são diferentes e se são do mesmo tipo
console.log(5 !== 5);   // false
console.log(5 !== "5"); // true (tipos diferentes)
console.log(5 !== 10);  // true

//Verifica se um valor é  maior ou igual a outro.
console.log(10 > 5);  // true
console.log(10 >= 10); // true
console.log(10 >= 20); // false

// Verifica se um valor é menor ou igual a outro
console.log(5 < 10);  // true
console.log(10 <= 10); // true
console.log(20 <= 10); // false


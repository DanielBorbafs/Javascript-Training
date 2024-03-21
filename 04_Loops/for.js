// somando todos números de um array
let numeros = [10, 20, 30, 40, 50];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("A soma dos números é:", soma);

// contando até 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Tirando a média de um salario semestral usando loop for

let salarios = [1772, 1821, 1900, 1918, 1990, 2100]
let semestre = 0

for (let i = 0; i < salarios.length; i++) {
  semestre += salarios[i]
}
mediaSalario = semestre / 6;
console.log("A média dos sálarios é :" + mediaSalario.toFixed(2));

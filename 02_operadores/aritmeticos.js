// soma
const salario = 1.200
const bonus = 300
const salarioTotal = salario + bonus
console.log(salarioTotal);

// subtração 
const salario01 = 1200
const desconto = 300
const salarioFinal = salario01 - desconto;
console.log(salarioFinal);

// Multiplicação 
function totalSemestral(salario){
  return salario * 6;
}
const semestre = totalSemestral(1000);
console.log(semestre)

// Divisão
// média de salario com base em 12 meses
// 01 - gerando um array automatico com 12 valores(salarios) diferentes.
function gerarArray() {
    let array = [];
    for (let i = 0; i < 12; i++) {
        let valor = Math.floor(Math.random() * (1800 - 1200 + 1)) + 1200; // Arrendondando os valores e randomizando
        array.push(valor);
    }
    return array;
}

let meuArray = gerarArray(); // Gerando o array
let qtdMes = 12;
let soma = meuArray.reduce((acc, curr) => acc + curr, 0); // Somando todos os elementos do array
let media = soma / qtdMes;
console.log(media);

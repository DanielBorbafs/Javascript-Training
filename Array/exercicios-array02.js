
// 1 some todos os números do array e divida por2

const arraySoma = [10, 20, ,25, 35 ,80, 11]
const Somatotal = arraySoma.reduce((acumulador, ValorAtual)=> {
   return acumulador + ValorAtual;
}, 0);

console.log(Somatotal/2)
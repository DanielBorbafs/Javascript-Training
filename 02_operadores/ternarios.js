// condição ? expressão1 : expressão2
function podeDirigir(idade){
  return (idade >= 18) ? "Pode dirigir" : "Não pode dirigir" // Caso a condição for verdadeira irá retornar a expressão 01
}
console.log(podeDirigir(17)); // Não pode dirigir
console.log(podeDirigir(18)); // Pode dirigir

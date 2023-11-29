//Operador Lógico e (&&)
//Retorna true se os dois operandos forem true
let maiorIdade = true;
let possuiCnh = true;
let podeDirigir = maiorIdade && possuiCnh
console.log(podeDirigir)

//Operador lógico ou (||)
//Retorna true se um dos operandos forem true
let acimadoPeso = true;
let fazdieta = false;
let precisaFazerDieta = acimadoPeso || fazdieta;
console.log(precisaFazerDieta)

//Operador NOT negação (!)
let candidatoRecusado = !podeDirigir;
console.log(candidatoRecusado)



/* Operadores com valores Booleanos - O resultado de uma compração lógica nem sempre é true ou false
False - undefined,  , undefined, null, NaN, 0
True - tudo oque nao for false kk
*/
// false  1  Retorna 1 pq ele é true
let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao
console.log(corPerfil) // Retorna true porque o || precisa apenas de uma condicao verdadeira entao ele ja achou o true na string 'vermelho' e ele ja para de procurar
/* Exercicio 01 
criar uma calculadora de Índice de Massa Corporal (IMC), onde o usuário insere seu peso e altura, 
e o programa retorna o resultado do IMC e a categoria correspondente.
*/

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    var categoria;

    switch(true) {
        case ( imc < 18.5):
            categoria = "abaixo do peso"; 
            break;
        case (imc >= 18.5 && imc < 25):
            categoria = "Peso normal"
            break;
        case (imc >= 25 && imc < 30):
            categoria = "Sobrepeso";
            break;
        default:
            categoria = "Obesidade";
    
    }

    return "seu imc é " + imc.toFixed(2) + " Vocë esta na categoria: " + categoria;
}
console.log(calcularIMC(70, 1.75));
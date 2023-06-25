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


/* Exercicio 02 
    Usar um switch para verificar o dia da semana com base em um número digitado pelo usuário.
*/
function verificarDiaSemana(numero) {
    var diaSemana;
  
    switch (numero) {
      case 1:
        diaSemana = "Domingo";
        break;
      case 2:
        diaSemana = "Segunda-feira";
        break;
      case 3:
        diaSemana = "Terça-feira";
        break;
      case 4:
        diaSemana = "Quarta-feira";
        break;
      case 5:
        diaSemana = "Quinta-feira";
        break;
      case 6:
        diaSemana = "Sexta-feira";
        break;
      case 7:
        diaSemana = "Sábado";
        break;
      default:
        diaSemana = "Número inválido";
    }
  
    return "O número " + numero + " corresponde a " + diaSemana;
  }
  
  // Exemplo de uso:
  console.log(verificarDiaSemana(3)); // Saída: O número 3 corresponde a Terça-feira
  

/* Exercicio 03
  usar um switch para redirecionar um usuário para diferentes tipos de páginas
  com base em uma escolha feita por ele
*/

function redirecionarPagina(escolha) {
    var url;
  
    switch (escolha) {
      case "home":
        url = "https://www.example.com";
        break;
      case "sobre":
        url = "https://www.example.com/sobre";
        break;
      case "produtos":
        url = "https://www.example.com/produtos";
        break;
      case "contato":
        url = "https://www.example.com/contato";
        break;
      default:
        url = "https://www.example.com";
    }
  
    // Redirecionar para a URL correspondente
    window.location.href = url;
  }
  
  // Exemplo de uso:
  redirecionarPagina("produtos")

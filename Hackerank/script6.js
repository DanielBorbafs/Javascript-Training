
/* Detalhes da Escada
Esta é uma escada de tamanho n:

shell
Copiar código
   #
  ##
 ###
####
A base e a altura são ambas iguais a n. Ela é desenhada usando símbolos # e espaços. A última linha não é precedida por nenhum espaço.

Escreva um programa que imprime uma escada de tamanho n.

Descrição da Função
Complete a função staircase no editor abaixo.

staircase tem o(s) seguinte(s) parâmetro(s):

int n: um inteiro
Impressão
Imprima uma escada como descrito acima.

Formato de Entrada
Um único inteiro, n, denotando o tamanho da escada.

Restrições
1 ≤ n ≤ 100
Formato de Saída
Imprima uma escada de tamanho n usando símbolos # e espaços.

Nota: A última linha deve ter n espaços
*/

function escada(n) {
    // Inicia um loop que vai de 1 até n (inclusive)
    for (let i = 1; i <= n; i++) {
        // Cria uma string de espaços, repetindo (n - i) vezes
        let espacos = ' '.repeat(n - i);
        
        // Cria uma string de símbolos '#' repetindo i vezes
        let simbolos = '#'.repeat(i);
        
        // Imprime a combinação de espaços e símbolos, formando um degrau da escada
        console.log(espacos + simbolos);
    }
}


const tamanhoDaEscada = 4; // Define o tamanho da escada como 4
escada(tamanhoDaEscada); // Chama a função para imprimir a escada de tamanho 4

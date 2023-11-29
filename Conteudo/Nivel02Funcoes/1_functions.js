/* 
oque é uma função?

boas praticas para nomear = verbo + substantivo

existem funções que retornam algo e outras que não retornam.. 
que tem parâmetro e que não tem parâmetro..
*/

//exemplo trocando a cor de um site com uma função sem parametro
let corSite = "azul"
let corSite2 = "Branco"
function resetaCor() {
    corSite = "vermelho";
}
console.log(corSite)
resetaCor();
console.log(corSite)


// Trocando a cor do site usando função com parâmetros
function resetaCor2(cor, tonalidade){
    corSite2 = cor + " " + tonalidade;
}
console.log(corSite2);
resetaCor2("Verde", "escuro");
console.log(corSite2);


//as funcoes podem realizar uma tarefa e nao devolver nada.
function perguntarNome() {

	console.log('Qual seu nome')
}
perguntarNome() 



//Realizar uma tarefa com base em algum parâmetro, ex multiplicar algum numero por 2
function MultiplicarPorDois(valor){
	return valor *  2;
}
// Atribuindo
let resultado = MultiplicarPorDois(5);
console.log(resultado);


/* 
Oque é um Objeto?
 é uma estrutura de pares de chave-valor, 
 onde cada chave é uma string e cada valor pode ser qualquer tipo de dado.
*/

// Sintaxe de um objeto

let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Vitoria",
    mensagem: function() { //Método de objeto em javascript são funções que são associadas a propriedades de um objeto.
        console.log("Meu nome é " + this.nome + "!");
    }
};

//acessando os valores de um objeto
pessoa.mensagem() 
console.log(pessoa.idade)

// Como modificar valores de um objeto
pessoa.idade = 22;
console.log(pessoa.idade)

/*
Como desestruturar um objeto? para que serve?
Basicamente serve para extrair valores de objetos e atríbui-los a variáveis.
*/

let jogo = {
    nome: "The Witcher",
    genero: "Rpg",
    preco: 110
}

// Desestruturando o objeto
let {nome, genero, preco} = jogo;
console.log(genero)


/*
oque são construtores de objetos?
São funções que são usuadas para criar e inicializar objetos.

THIS - é uma referencia a um objeto no contexto atual da execução
NEW -  é usado para criar um NOVO objeto.

*/
function Cargo(cargo, salario) {
    this.cargo = cargo;
    this.idade = salario;
    this.saudacao = function() {
      console.log("Olá, meu cargo é" + this.cargo + "e eu recebo um valor de R$" + this.salario);
    };
  }
  
  // Criando um objeto usando o construtor
  let pessoa1 = new Cargo("Analista de Infraestrutura", 3000);
  let pessoa2 = new Cargo("DevOPS", 5000);
 
  

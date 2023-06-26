/*
Exercício 1: Acessar propriedades de um objeto
Crie um objeto chamado "pessoa" que represente uma pessoa com as propriedades "nome", "idade" e "profissao". 
Em seguida, acesse e exiba no console o nome e a profissão da pessoa.
*/
const pessoa = {
nome: "Daniel",
idade: "22",
profissao: "Desenvolvedor"
};
console.log(pessoa.nome)
console.log(pessoa.profissao)


/*
Exercício 2: Modificar propriedades de um objeto
Considere o objeto "livro" com as propriedades "titulo", "autor" e "ano". 
Modifique a propriedade "ano" para o ano atual e exiba o objeto completo no console.
*/

const livro = {
    titulo : "A cabana",
    autor :"Bonnier",
    ano : "1999" 
}
livro.ano = 2023
console.log(livro.ano)

/* 
Exercício 4: Iterar sobre as propriedades de um objeto
Crie um objeto chamado "aluno" com as propriedades "nome", "idade" e "notas" (um array com as notas do aluno). 
um loop for...in para percorrer todas as propriedades do objeto e exiba seus valores no console.
*/

const aluno = {
    nome: "Daniel",
    idade : 23,
    notas : [10, 7, 8, 9]
}
for (let propriedade in aluno) {
    console.log(propriedade + ": " + aluno[propriedade]);
}
// Puxando apenas array
for (let propriedade in aluno) {
    if (Array.isArray(aluno[propriedade])) {
      console.log(propriedade + ": " + aluno[propriedade]);
    }
}

// Calcule a média das notas e adicione a propriedade "media" ao objeto com o valor da média. Exiba o objeto completo no console.

  
const notas = aluno.notas;
  let soma = 0;
  
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
  
const media = soma / notas.length;
console.log("Média das notas:", media);
  
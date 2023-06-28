/*
EXERCÍCIO 01
em nosso sistema armazenamos dados do usuário em duas tabelas diferentes, no caso quando demos get
retorna os dados em forma de objeto, preciso unir os objetos em apenas um.
*/

const Login = { login: "Danborba", senha: "Sofi478954" };
const Infos = { email: "danborba@gmail.com", github: "Danielborbafs" };
const agrupar = { ...Login, ...Infos };
console.log(agrupar);

/*
EXERCICIO 02 
Tenho uma empresa que fala sobre críticas de filmes, porém armazenamos os dados em  tabelas diferentes,
Exemplo: nome de um filme e data de lançamento em uma tabela e categoria
Classificação de idade
Nivel de qualidade do filme
*/

const NomeFilme = {
  nome: "GodZila",
  dataLancamento: "28/01/1999",
  categoria: "Ação",
};
const classificacao = { idade: 17 };
const qualidadeFilme = { qualidae: "Media" };

const infoFilme = { ...NomeFilme, ...classificacao, ...qualidadeFilme };
console.log(infoFilme);



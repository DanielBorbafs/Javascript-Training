/*
EXERCÍCIO 02
em nosso sistema armazenamos dados do usuário em duas tabelas diferentes, no caso quando demos get
retorna os dados em forma de objeto, preciso unir os objetos em apenas um.
*/

const Login = {login:"Danborba", senha:"Sofi478954"};
const Infos = {email: "danborba@gmail.com", github: "Danielborbafs"}
const agrupar = {...Login, ...Infos};
console.log(agrupar)
/*O switch funciona comparando o valor de uma expressão com os valores associados aos diferentes casos. 
Se houver uma correspondência, o código dentro desse caso específico é executado. 
Se nenhum caso corresponder, você pode fornecer um bloco default que será executado.
*/


let permissao;  // Usuario comum, gerente, diretor
permissao = 'gerente';

switch (permissao) {
    case 'comum':
        console.log('usuário comum');
        break;
    case 'gerente':
        console.log('usuário gerente');
        break;
    case 'diretor':
        console.log('usuário diretor');
        break;
    default:
        console.log('Usuário não reconhecido');
}

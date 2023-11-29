
// Receber uma quantidade de valores para avaliar
// Exibir se é par ou impar


exibirTipo(5) ;
function exibirTipo(limite) {
    for (let i=0; i <= limite; i++) {
        if( i % 2 === 0)
        console.log(i,'Par')
    else
        console.log(i,'Impar');
    }
}

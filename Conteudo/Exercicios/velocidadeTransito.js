
/*  R E G R A S
Velocidade máxima de até 70
A cada 5km acima do limite você ganha 1 ponto
usar Math.Floor() para arredondar;
Caso os pontos sejam maior que 12 - 'carteira suspendida'

*/

verificarVelocidade(75);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Ok, dentro da velocidade permitida!')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log('Pontos perdidos:', pontos);
    }
}
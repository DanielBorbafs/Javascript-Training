// Em JavaScript, a estrutura if...else é usada para executar blocos de código com base em uma condição especificada.
const permissaoDirigir = 17;
if (permissaoDirigir >= 18) {
    console.log("Voce tem permissao para dirigir")
} else {
    console.log("Voce nao pode dirigir")
}

// Podemos utilizar uma função dentro de um if
turista = true

if (turista) {
    falarIngles()
} else {
    falarPortugues()
}

function falarIngles() {
    console.log('Hello, nice to meet you')
}

function falarPortugues() {
    console.log('Oi, é um prazer em conhecê-lo')
}

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

// Tambem podemos criar varios ELSES para atender diversas condições. EX:

nota = 49

if (nota >= 80) {
    console.log("parabens, voce está com um otimo aproveitamento")
} else if (nota >= 65) {
    console.log("parabéns, voce está com um bom aproveitamento")

} else if (nota >= 51) {
    console.log("Voce está na média, parabéns")
} else if (nota <= 50) {
    console.log("Voce esta abaixo da média por favor, estude mais")
} else {
    console.log("Nao achei registro de suas notas.")
}

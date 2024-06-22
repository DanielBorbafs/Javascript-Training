// declare um objeto que possua uma função dentro dele

let Carro = {
    Marca: "Fiat",
    Ano: 2024,
    Modelo: "Mobi",
    Acelero: function Acelerar() {
        return console.log("o carro de modelo " + this.Modelo + " está acelerando")
    }
}

Carro.Acelero()

//  crie um objeto para verificar se um usuario é admin usando operador ternário

let Usuario = {
    login: "Daniel",
    admin: true
}

let isAdmin = Usuario.admin ? "Logar como admin" : "Logar como Usuário normal";

console.log(isAdmin)
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


// Crie uma função que crie objetos 

const MotoTemplate = {
    criacao: function() {
        return `${this.marca} ${this.modelo} ${this.ano}`
    }
};

function criarMoto(marca, modelo, ano) {
    const novaMoto = Object.create(MotoTemplate);
    novaMoto.marca = marca;
    novaMoto.modelo = modelo;
    novaMoto.ano = ano;
    return novaMoto;
}


const minhaMoto = criarMoto('Honda','Sahara 300', 2023);
console.log(minhaMoto.criacao());
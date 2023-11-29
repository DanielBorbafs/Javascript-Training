/*
Oque é Protótipo?
    Em JavaScript, um protótipo é uma referência interna que um objeto possui,
    apontando para outro objeto chamado de "protótipo". 
    Esse protótipo serve como um modelo a partir do qual o objeto herda propriedades e métodos.
*/

// Objeto PAI ou PROTÓTIPO

let carro = {
    acelerar: function() {
        console.log("Acelerando... estou a 52km");
    }
};

// Objeto filho que Herda do pai
let moto = Object.create(carro);

// Adicionando a propriedade especifica ao filho
moto.freiar = function() {
    console.log("estou freiando.. estou a 10km")
};

// usando os métodos
moto.freiar(); //Herdadado do prototipo
moto.acelerar(); //Proprio do objeto filho


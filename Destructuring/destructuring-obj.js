const pessoa = {
nome : "Daniel",
idade: 22,
naturalidade: "Brasileiro"
}

const { nome, idade, naturalidade } = pessoa

const NomeNaturalidade = nome + " "+ naturalidade
console.log(NomeNaturalidade)


// Tirando o desconto de um produto dentro de um objeto

const celular = {
    nome: "Galaxy S20",
    preco : 2200,
    desconto: 15
}
const {nome, preco, desconto} = celular
const valorDesconto = preco * (desconto / 100);
const valorTotal = preco - valorDesconto
console.log("O Valor do celular com o desconto ficaria R$ " + valorTotal.toFixed(2));
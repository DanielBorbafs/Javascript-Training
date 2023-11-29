// For in, feito para iterar sobre objetos e elementos de arrays

const pessoa = {
	nome: 'Jhonatan',
	idade: 25
};

 // key-value - chave e valor
for(let chave in pessoa ) {
	console.log (chave, pessoa.nome,pessoa.idade);
}



const cores = ['azul', 'white', 'vermelho', 'pink']

for(let indice in cores) {
	console.log(indice, cores[indice])
}

//for-of 

for(let cor of cores) {
	console.log(cor)
}

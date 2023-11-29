
//funcao que usa dois numeros e retorna o maior numero entre eles
function comparaNumeros(numero1, numero2) {
  if( numero1 >  numero2 ) {
    console.log(numero1)
  } else {
    console.log(numero2)
  }
}
comparaNumeros(80, 300)

// ou 
/*
function comparaNumeros(numero1, numero2) {
    let retornaNumero = numero1 = numero2?  numero1 :  numero2
    console.log(retornaNumero)
}
comparaNumeros(9, 5)
 */ 

// ou
let valorMaior = max(5,90)
console.log(valorMaior);

function max(numero1, numero2) {
	if(numero1 > numero2)
		return numero1;
	return numero2;
}
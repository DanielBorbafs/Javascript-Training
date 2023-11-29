/* 
 Condicionais - IF...ELSE

 Se a hora estiver entre 0600 até 1200 bom dia
 Se estiver entre 1200 até 1800 boa tarde
 caso contrario  boa noite
*/

// Estrutura 
const teste = 11
if(teste >= 1 && teste < 2) {
	console.log('teste fase inicial')
} else if (teste >= 2 && teste < 10) {
	console.log('teste no meio do caminho')
}
else {
	console.log('teste terminado')
}

let hora = 13;

if (hora >= 6 && hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

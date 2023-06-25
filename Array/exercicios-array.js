/*
[ 10, 12 , 18 , 14 , 16 , 20, 21, 34, 38, 40, 20, 10]

01 -  adicione o numero 5 após o primeiro número do array

02 - Remova o primeiro e o último número do array

03 -  altere o valor do terceiro número do array

04 - traga todos números pares do array

05 - some todos os números do array


*/ 

const array = [ 10, 12 , 18 , 14 , 16 , 20, 21, 34, 38, 40, 20, 10]

// 01 
let indice = 1 
numeroAdicionado = 11
array.splice(indice,0, numeroAdicionado)
console.log(array)

// 02 
const array = [ 10, 11, 12 , 18 , 14 , 16 , 20, 21, 34, 38, 40, 20, 10]
array.pop() 
array.shift()
console.log(array)
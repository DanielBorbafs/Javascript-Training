// operadores lógicos envolvem valores booleanos "true or false", exemplos:

//Operador Lógico AND (&&):
// Este operador retorna true se e somente se ambos os operandos forem verdadeiros. Caso contrário, retorna false.
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false


//Operador Lógico OR (||):
//Este operador retorna true se pelo menos um dos operandos for verdadeiro. Retorna false apenas se ambos os operandos forem falsos.
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

//Operador Lógico NOT (!):
//Este operador é usado para negar o valor de uma expressão booleana. Se a expressão for verdadeira, ele a torna falsa e vice-versa.
console.log(!true);  // false
console.log(!false); // true

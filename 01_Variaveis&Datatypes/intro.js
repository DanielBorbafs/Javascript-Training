// VAR - POSSUI ESCOPO FUNÇÃO, CONSEGUIMOS ACESSAR APENAS DENTRO DE UMA FUNÇÃO . EX:
function exemplo() {
    var mensagem = "Esta é uma mensagem dentro da função";
    console.log(mensagem);
}
exemplo(); // AQUI ESTAMOS EXECUTANDO A FUNÇÃO ENTÃO ELA VAI FUNCIONAR
console.log(mensagem) // AQUI ESTAMOS TENTANDO ACESSAR DIRETAMENTE, ENTÃO IRÁ DAR ERRO.


// LET - POSSUI ESCOPO DE BLOCO {}, SÓ CONSEGUIMOS ACESSÁ-LA DENTRO DE UM BLOCO. EX;
function exemploLet() {
    if (true) {
        let mensagem = "Esta é uma mensagem dentro do escopo de bloco com let";
    }
    console.log(mensagem); // Erro: mensagem is not defined (mensagem não está definida aqui)
}

exemploLet(); // Erro: mensagem is not defined (mensagem não está definida fora do escopo de bloco)


// CONST, UMA CONSTANTE ONDE UM VALOR NÃO PODE SER REATRÍBUIDO. EX:
const salario = 1200
salario = 1230 // erro: Cannot assign to "salario" because it is a constant.

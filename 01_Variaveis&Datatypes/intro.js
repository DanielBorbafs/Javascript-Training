// VAR - POSSUI ESCOPO FUNÇÃO, CONSEGUIMOS ACESSAR APENAS DENTRO DE UMA FUNÇÃO . EX:
function exemplo() {
    var mensagem = "Esta é uma mensagem dentro da função";
    console.log(mensagem);
}
exemplo(); // AQUI ESTAMOS EXECUTANDO A FUNÇÃO ENTÃO ELA VAI FUNCIONAR
console.log(mensagem) // AQUI ESTAMOS TENTANDO ACESSAR DIRETAMENTE, ENTÃO IRÁ DAR ERRO.

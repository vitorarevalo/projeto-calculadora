
// função de inserir numero
function inserir(num){
    var numero = document.querySelector("#resposta").value
    document.querySelector("#resposta").value = numero + num
}

// função de limpar
function limparOp(){
    document.querySelector("#resposta").value = ""
    
}

// função de inserir operação
function inserirOp(caractere){
    var resultado = document.querySelector("#resposta");
    var valorAtual = resultado.value;

    var ultimoCaractere = valorAtual.charAt(valorAtual.length - 1);
    if (['+', '-', '*', '/'].includes(ultimoCaractere) && ['+', '-', '*', '/'].includes(caractere)) {
        return;
    }
    resultado.value = valorAtual + caractere;
}




// função de inserir parênteses
function inserirPar(num){
    var numero = document.querySelector("#resposta").value
    document.querySelector("#resposta").value = numero + num
}


// função de apagar
function apagar(){
    var resultado = document.querySelector("#resposta").value
    document.querySelector("#resposta").value = resultado.substring(0, resultado.length -1)
}


// funçõ de calcular
function calculo(x){
    var resultado = document.querySelector("#resposta").value
    if(resultado){
        document.querySelector("#resposta").value = eval(resultado)
    }
}

// função de inserir numero
function inserir(num){
    var resultado = document.querySelector("#resposta");
    var inicio = resultado.selectionStart;
    var valor = resultado.value;
    resultado.value = valor.substring(0, inicio) + num + valor.substring(inicio);
    resultado.selectionStart = inicio + 1;
    resultado.selectionEnd = inicio + 1;

    resultado.scrollLeft = resultado.scrollWidth;
}

// função de limpar
function limparOp(){
    document.querySelector("#resposta").value = "";
    
}

// função de inserir operação
function inserirOp(caractere){
    var resultado = document.querySelector("#resposta");
    var valorAtual = resultado.value;
    var inicio = resultado.selectionStart;
    
    var ultimoCaractere = valorAtual.charAt(valorAtual.length - 1);
    if (['+', '-', '*', '/'].includes(ultimoCaractere) && ['+', '-', '*', '/'].includes(caractere)) {
        return;
    }
    resultado.value = valorAtual + caractere;
    resultado.selectionStart = inicio + 1;
    resultado.selectionEnd = inicio + 1;
}




// função de inserir parênteses
function inserirPar(num) {
    var numero = document.querySelector("#resposta").value;

    if (num === "()") {
        if (numero.endsWith(")")) {
            document.querySelector("#resposta").value = numero + "(";
        } else if (numero.endsWith("(")) {
            document.querySelector("#resposta").value = numero + ")";
        } else {
            document.querySelector("#resposta").value = numero + "(";
        }
    }
    resultado.selectionStart = resultado.selectionEnd = resultado.value.length;
}



// função de apagar
function apagar() {
    var resultado = document.querySelector("#resposta");
    var inicio = resultado.selectionStart;
    var valor = resultado.value;
    resultado.value = valor.substring(0, inicio - 1) + valor.substring(inicio);
}


// funçõ de calcular
function calculo(){
    var resultado = document.querySelector("#resposta").value
    if(resultado){
        document.querySelector("#resposta").value = eval(resultado)
    }
}
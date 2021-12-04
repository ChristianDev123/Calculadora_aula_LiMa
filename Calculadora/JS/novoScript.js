const divDisplay = document.querySelector("div#resultado");
var stringCompleta = "";
var operador = "";
var numUm = "";
var numDois = "";
var controleExecucao = "";

function limpaTudo(){
    divDisplay.innerHTML = "";
    operador = "";
    numUm = "";
    numDois = "";
    stringCompleta = "";
    controleExecucao = "";
};
function apagar(){
    const arrayValorDisplay = divDisplay.textContent; 
    if(arrayValorDisplay[arrayValorDisplay.length] == operador){
        operador = "";
        numDois = "";
    };
    const novoValorTela = arrayValorDisplay.substring(0,arrayValorDisplay.length-1);
    const novoValorPrimeiroNum = String(numUm);
    const novoValorSegundoNum = String(numDois);
    const novoValorStringCompleta = stringCompleta; 
    divDisplay.innerHTML = novoValorTela;
    numUm = novoValorPrimeiroNum.substring(0,novoValorPrimeiroNum.length-1);
    numDois = novoValorSegundoNum.substring(0,novoValorSegundoNum.length-1);
    stringCompleta = novoValorStringCompleta.substring(0,novoValorStringCompleta.length-1);
    controleExecucao = "";
    if(divDisplay.textContent == ""){
        numUm = "";
        numDois = "";
        operador = "";
        stringCompleta = "";
    };
};
function criaString(elemento){
    const tratamento = String(elemento);
    stringCompleta += tratamento;
    divDisplay.innerHTML += tratamento;
    controleExecucao = "";
};
function executar(){
    if(controleExecucao == ""){
        var verificaOperador = stringCompleta;
        var res = 0;
        while(true){
            if(verificaOperador.charAt(0) == "+"||verificaOperador.charAt(0) == "-"||verificaOperador.charAt(0) == "*"||verificaOperador.charAt(0) == "/"){
                operador = verificaOperador[0];
                numDois = verificaOperador.substring(1,verificaOperador.length)
                break
            }else{
                numUm += verificaOperador.charAt(0)
                verificaOperador = verificaOperador.substring(1,verificaOperador.length);
            }
        };
        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);
        switch(operador){
            case "+":
                res = numUm + numDois;
            break
            case "-":
                res = numUm - numDois;
            break
            case "*":
                res = numUm * numDois;
            break
            case "/":
                res = numUm / numDois;
            break
        }
        divDisplay.innerHTML = res;
        stringCompleta = "";
        numUm = res;
        controleExecucao = "s";
    };
};
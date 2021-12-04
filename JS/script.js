const divDisplay = document.querySelector("div#resultado") 
var primeiroNum = "";
var segundoNum = "";
var operador = "";

function limpaTudo(){
    divDisplay.innerHTML = ""
    operador = "";
    primeiroNum = "";
    segundoNum = "";
}
function apagar(){
    const arrayValorDisplay = divDisplay.textContent 
    if(arrayValorDisplay[arrayValorDisplay.length] == operador){
        operador = ""
        segundoNum = ""
    }
    const novoValorTela = arrayValorDisplay.substring(0,arrayValorDisplay.length-1)
    const novoValorPrimeiroNum = primeiroNum
    const novoValorSegundoNum = segundoNum
    divDisplay.innerHTML = novoValorTela
    primeiroNum = novoValorPrimeiroNum.substring(0,novoValorPrimeiroNum.length-1)
    segundoNum = novoValorSegundoNum.substring(0,novoValorSegundoNum.length-1)
    if(divDisplay.textContent == ""){
        primeiroNum = "";
        segundoNum = "";
        operador = "";
    }
}
function tecla1(){
    const valTecla = "1";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla2(){
    let valTecla = "2";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla3(){
    let valTecla = "3";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla4(){
    let valTecla = "4";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla5(){
    let valTecla = "5";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla6(){
    let valTecla = "6";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla7(){
    let valTecla = "7";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla8(){
    let valTecla = "8";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla9(){
    let valTecla = "9";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function tecla0(){
    let valTecla = "0";
    divDisplay.innerHTML += valTecla;
    verificaPosNum(valTecla)
    return parseInt(valTecla);
}
function adicao(){
    operador = "+"
    divDisplay.innerHTML += ` ${operador} `
}
function subtracao(){
    operador = "-"
    divDisplay.innerHTML += ` ${operador} `
}
function multiplicacao(){
    operador = "*"
    divDisplay.innerHTML += ` ${operador} `
}
function divisao(){
    operador = "/"
    divDisplay.innerHTML += ` ${operador} `
}
function executar(){
    const primeiroNumTratado = parseFloat(primeiroNum);
    const segundoNumTratado = parseFloat(segundoNum);
    var res = 0;
    switch(operador){
        case "+":
            res = primeiroNumTratado + segundoNumTratado
            break
        case "-":
            res = primeiroNumTratado - segundoNumTratado
            break
        case "*":
            res = primeiroNumTratado * segundoNumTratado
            break
        case "/":
            res = primeiroNumTratado / segundoNumTratado
            break
    }
    divDisplay.innerHTML = res
}
function verificaPosNum(num){
    if(operador != ""){
        primeiroNum += num
    }else{
        segundoNum += num
    }
}
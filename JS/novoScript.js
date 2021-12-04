const divDisplay = document.querySelector("div#resultado");
var stringCompleta = "";

function criaString(elemento){
    var tratamento = String(elemento);
    stringCompleta += tratamento;
    divDisplay.innerHTML += tratamento
};
function executar(){
    var verificaOperador = stringCompleta;
    var primeiroNum = "";
    var segundoNum = "";
    var i = 0; 
    while(verificaOperador.charAt(0) != '+'|| verificaOperador.indexOf('-') != 0||verificaOperador.indexOf('*') != 0||verificaOperador.indexOf('/') != 0){
        primeiroNum += verificaOperador.substring(i);
        verificaOperador = verificaOperador.substring(1);
        i++
    };
    segundoNum = stringCompleta.substring(primeiroNum.length + 1 , stringCompleta.length );
// não chegou nessa parte    
    switch(verificaOperador.charAt(0)){
        case "+":
            divDisplay.innerHTML = primeiroNum + segundoNum;
            break
        case "-":
            divDisplay.innerHTML = primeiroNum - segundoNum;
            break
        case "*":
            divDisplay.innerHTML = primeiroNum * segundoNum;
            break
        case "/":
            divDisplay.innerHTML = primeiroNum / segundoNum;
            break                  
    };
};
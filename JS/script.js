const divDisplay = document.querySelector("div#resultado");
const divDolar = document.querySelector("div#dolar")
var stringCompleta = "";
var operador = "";
var numUm = "";
var numDois = "";
var controleExecucao = "";
var controleFuncaoCotacao = 0;
const urlCotacao = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?%40dataInicial=%2711-23-2021%27&%40dataFinalCotacao=%2711-25-2021%27&%24format=json";
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
    if(stringCompleta.charAt(stringCompleta.length -1) == "+"||stringCompleta.charAt(stringCompleta.length -1) == "-"||stringCompleta.charAt(stringCompleta.length -1) == "*"||stringCompleta.charAt(stringCompleta.length -1) == "/"){
        if(elemento != stringCompleta.charAt(stringCompleta.length-1)){
            var tratamento = String(elemento);
            stringCompleta += tratamento;
            divDisplay.innerHTML += tratamento;
            controleExecucao = "";
        }
        operador = elemento
        if(operador != elemento){
            switch(elemento){
                case "+":
                    operador = elemento
                    break
                case "-":
                    operador = elemento
                    break
                case "*":
                    operador = elemento
                    break
                case "/":
                    operador = elemento
                    break 
           }
           apagar()
           stringCompleta += operador
           divDisplay.innerHTML += operador 
        }
    }else{
        const tratamento = String(elemento);
        stringCompleta += tratamento;
        divDisplay.innerHTML += tratamento;
        controleExecucao = "";
    }
};
function executar(){
    if(stringCompleta != ""){
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
};
function pegaCotacao(){
    fetch(urlCotacao)
    .then((resp) => resp.json())
    .then(json => cotacaoTela(json))
}
function cotacaoTela(json){
    const valores = json.value
    divDolar.innerHTML = `
    <h2>Cotação do Dolar:</h2>
    <h2>Data Cotação: ${valores[0].dataHoraCotacao}</h2>
    <h2>Cotacao para Compra: ${valores[0].cotacaoCompra}</h2>
    <h2>Cotacao para Venda: ${valores[0].cotacaoVenda}</h2>
    `
    limpaCotacao()
};
function limpaCotacao(){
    if(controleFuncaoCotacao == 0){
        controleFuncaoCotacao = 1
        return "coloca"
    }else{
        divDolar.innerHTML = "";
        controleFuncaoCotacao = 0
        return "retira"
    }
}
function criaDiv(caminhoHTML,valorId = "",valorClass){
    const div = document.createElement("div");
    div.setAttribute("id",`${valorId}`);
    div.setAttribute("class", `${valorClass}`);
    caminhoHTML.appendChild(div);
    const caminhoDiv = document.querySelector(`div#${valorId}`) 
    return caminhoDiv
};
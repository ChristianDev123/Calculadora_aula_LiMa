const divDisplay = document.querySelector("div#resultado");
const divDolar = document.querySelector("div#dolar");
var controleFuncaoCotacao = 0;
var stringCompleta = "";
const urlCotacao = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?%40dataInicial=%2711-23-2021%27&%40dataFinalCotacao=%2711-25-2021%27&%24format=json";
const arrayConta = [];
function limpaTudo(){
  stringCompleta = "";
  divDisplay.innerHTML = "";  
};
function apagar(){
    stringCompleta = divDisplay.textContent;
    divDisplay.textContent = stringCompleta.substring(0,stringCompleta.length -1);
    stringCompleta = divDisplay.textContent;
};
function criaString(elemento){
    stringCompleta = divDisplay.textContent;  
    const operadorString = stringCompleta.charAt(stringCompleta.length-1)
    if(operadorString == "+" || operadorString == "-" || operadorString == '*' || operadorString == '/'){
        if(elemento == "+"||elemento == "-" || elemento == "*" || elemento == "/"){
            alert("[error]");
        }else{
            divDisplay.innerHTML += String(elemento);  
        }
    }else{
        divDisplay.innerHTML += String(elemento);
    };
    stringCompleta = divDisplay.textContent;
};
function executar(){
    if(stringCompleta != ""){
        const res = eval(stringCompleta);
        divDisplay.innerHTML = res;
        criaHistorico();        
    };
};
function pegaCotacao(){
    fetch(urlCotacao)
    .then((resp) => resp.json())
    .then(json => cotacaoTela(json));
};
function cotacaoTela(json){
    const valores = json.value;
    divDolar.innerHTML = `
    <h2>Cotação do Dolar:</h2>
    <h2>Data Cotação: ${valores[0].dataHoraCotacao}</h2>
    <h2>Cotacao para Compra: ${valores[0].cotacaoCompra}</h2>
    <h2>Cotacao para Venda: ${valores[0].cotacaoVenda}</h2>
    `;
    limpaCotacao();
};
function limpaCotacao(){
    if(controleFuncaoCotacao == 0){
        controleFuncaoCotacao = 1;
        return "coloca";
    }else{
        divDolar.innerHTML = "";
        controleFuncaoCotacao = 0;
        return "retira";
    };
};
function criaHistorico(){
    const json = criaJson(divDisplay.textContent);
    sessionStorage.setItem("contas",json) ;
};
function criaJson(conta){
    if(conta != undefined){
        arrayConta.push(conta);
    };
    const objeto = {
        "conta": arrayConta,
    };
    return JSON.stringify(objeto);
};
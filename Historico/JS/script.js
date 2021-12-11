const caminhoConteudo = document.querySelector("div#conteudo")
function loadPage(){
    const ol = document.createElement("ol")
    ol.setAttribute("id","lista")
    caminhoConteudo.appendChild(ol)
    const caminhoOl = document.querySelector("ol#lista")
    const json = sessionStorage.getItem("contas")
    const objeto = JSON.parse(json)
    
    objeto.conta.map((contas)=>{
        const resultado = eval(contas)
        caminhoOl.innerHTML += `<li>${contas} = ${resultado.toFixed(2)}</li>`
    })
} 
function conversor() {
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector(".telaValores").style.display = "flex";
}

let cambio = [
    { nome: "Wons", codigo: "won", taxa: 257.026 },      // 1000 BRL = 257026 KRW
    { nome: "Dólares", codigo: "dolar", taxa: 0.1744 },  // 1 BRL = 0.1744 USD
    { nome: "Euros", codigo: "euro", taxa: 0.1615 }      // 1 BRL = 0.1615 EUR
];

let escolhaMoeda = document.getElementById("moeda");
let mensagemErro = document.getElementById("moedaInvalida");
let valorFinal = document.getElementById("valorConvertido");
let valorParaFormatar = document.getElementById("valor");
let resultadoConverter = document.getElementById("valorParaConverter");
let textoResultado = document.getElementById("resultado");
let nomeMoeda = document.getElementById("nomeMoeda");

function atualizarConversao() {
    let valor = parseFloat(valorParaFormatar.value);
    let moeda = escolhaMoeda.value;
    
    if (isNaN(valor) || valor <= 0) {
        textoResultado.style.display = "none";
        return;
    }

    let valorFormatado = valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    resultadoConverter.textContent = valorFormatado;

    if (moeda === "") {
        mensagemErro.style.display = "flex";
        textoResultado.style.display = "none";
    } else {
        mensagemErro.style.display = "none";

        let moedaObj = cambio.find(m => m.codigo === moeda);

        if (moedaObj) {
            let valorConvertido = (valor * moedaObj.taxa).toLocaleString("pt-BR", {style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2});
            valorFinal.textContent = valorConvertido;
            nomeMoeda.textContent = moedaObj.nome;
            textoResultado.style.display = "flex";
        }
    }
}

escolhaMoeda.addEventListener('change', atualizarConversao);
valorParaFormatar.addEventListener('input', atualizarConversao);
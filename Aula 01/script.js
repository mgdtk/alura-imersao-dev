// function conversor() { 
//     let moeda = prompt("Qual moeda deseja converter? Digite Won, Euro ou Dolar.");

//     while (moeda.toLowerCase() !== "won" && moeda.toLowerCase() !== "euro" && moeda.toLowerCase() !== "dolar") {
//         moeda = prompt("Entrada inválida. Qual moeda deseja converter? Digite Won, Euro ou Dolar.");
//     }

//     let valor = parseFloat(prompt("Qual valor (em reais) deseja converter?"));

//     while (isNaN(valor) || valor === "" || valor <= 0) {
//         valor = parseFloat(prompt("Entrada inválida. Qual valor (em reais) deseja converter?"));
//     }

//     let cambio = {
//         won: 257.026, // 1000 BRL = 257026 KRW
//         dolar: 0.1744, // 1 BRL = 0.1744 USD
//         euro: 0.1615 // 1 BRL = 0.1615 EUR
//     };

//     moeda = moeda.toLowerCase();
//     valorFormatado = valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

//     if (cambio[moeda]) {
//         let valorConvertido = (cambio[moeda] * valor).toLocaleString("pt-BR", {style: "decimal"});
//         console.log(valorConvertido);

//         let nomeMoeda = moeda === "dolar" ? "Dólares" : `${moeda.charAt(0).toUpperCase() + moeda.slice(1)}s`;
//         alert(`${valorFormatado} equivale a ${valorConvertido} ${nomeMoeda}.`);
//     } else {
//         alert("Erro.");
//     }
// }

function conversor() {
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector(".telaValores").style.display = "flex";
}

let cambio = {
    won: 257.026, // 1000 BRL = 257026 KRW
    dolar: 0.1744, // 1 BRL = 0.1744 USD
    euro: 0.1615 // 1 BRL = 0.1615 EUR
};

let valorParaFormatar = document.getElementById("valor");
let resultadoConverter = document.getElementById("valorParaConverter");

valorParaFormatar.addEventListener('input', function() {
    let valor = parseFloat(valorParaFormatar.value);

    if (!isNaN(valor) && valor > 0) {
        let valorFormatado = valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        resultadoConverter.textContent = valorFormatado;
    }
});
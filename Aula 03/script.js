function escolherRodadas() {
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector(".telaRodadas").style.display = "flex";
}

function validarRodadas() {
    let rodadas = document.getElementById("numRodadas").value;
    rodadas = parseInt(rodadas);

    if (isNaN(rodadas) || rodadas <= 0) {
        document.getElementById("numRodadasInvalido").style.display = "flex";
    } else {
        document.getElementById("numRodadasInvalido").style.display = "none";
        escolherTabuada();
    }
}

function escolherTabuada() {
    document.querySelector(".telaRodadas").style.display = "none";
    document.querySelector(".telaTabuada").style.display = "flex";
}

function validarTabuada() {
    let tabuada = document.getElementById("numTabuada").value;
    tabuada = parseInt(tabuada);

    if (isNaN(tabuada) || tabuada < 0) {
        document.getElementById("tabuadaInvalida").style.display = "flex";
    } else {
        document.getElementById("tabuadaInvalida").style.display = "none";
        jogar();
    }
}

// function jogar() {
//     for (let i = 1; i < (rodadas + 1); i++) {
//         let primeiroNumero = Math.floor(Math.random() * (tabuada + 1));
//         let segundoNumero = Math.floor(Math.random() * (tabuada + 1));

//         let resultado = primeiroNumero * segundoNumero;

//         let palpiteJogador = prompt(`Rodada ${i} de ${rodadas}. Digite o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`);
//         if (verificarCancelamento(palpiteJogador)) return;

//         while (isNaN(palpiteJogador) || palpiteJogador == "") {
//             palpiteJogador = prompt(`Entrada inválida. Digite um número para o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`);
//             if (verificarCancelamento(palpiteJogador)) return;
//         }

//         if (palpiteJogador != resultado) {
//             alert(`Você errou! O resultado era ${resultado}.`);
//             return;
//         } else {
//             alert(`Acertou!`);
//             if (i == rodadas) {
//                 alert("Parabéns! Você venceu!");
//             }
//         }
//     }
// }

// function verificarCancelamento(valor) {
//     if (valor === null) {
//         console.log("Operação cancelada.");
//         return true;
//     }
//     return false;
// }
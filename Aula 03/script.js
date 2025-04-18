let rodadas;
let tabuada;
let rodadaAtual;
let resultado;
let primeiroNumero;
let segundoNumero;

function escolherRodadas() {
    rodadaAtual = 1;
    document.getElementById("numRodadas").value = "";
    document.getElementById("numTabuada").value = "";
    document.getElementById("respostaJogador").value = "";
    document.querySelector(".telaDerrota").style.display = "none";
    document.querySelector(".telaVitoria").style.display = "none";
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector(".telaRodadas").style.display = "flex";
    document.getElementById("numRodadas").focus();
}

function validarRodadas() {
    rodadas = parseInt(document.getElementById("numRodadas").value);

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
    document.getElementById("numTabuada").focus();
}

function validarTabuada() {
    tabuada = parseInt(document.getElementById("numTabuada").value);

    if (isNaN(tabuada) || tabuada < 0) {
        document.getElementById("tabuadaInvalida").style.display = "flex";
    } else {
        document.getElementById("tabuadaInvalida").style.display = "none";
        document.querySelector(".telaTabuada").style.display = "none";
        document.querySelector(".telaJogo").style.display = "flex";
        document.getElementById("respostaJogador").focus();
        gerarPergunta();
    }
}

function gerarPergunta() {
    primeiroNumero = Math.floor(Math.random() * (tabuada + 1));
    segundoNumero = Math.floor(Math.random() * (tabuada + 1));

    resultado = primeiroNumero * segundoNumero;

    document.getElementById("numRodada").innerHTML = `Rodada ${rodadaAtual} de ${rodadas}`;
    document.getElementById("labelMultiplicacao").innerHTML = `Digite o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`;
}

function conferirResposta() {
    let palpiteJogador = document.getElementById("respostaJogador").value;

    if (isNaN(palpiteJogador) || palpiteJogador < 0 || palpiteJogador == "") {
        document.getElementById("resultadoInvalido").innerHTML = `Entrada inválida. Digite um número para o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`;
        document.getElementById("resultadoInvalido").style.display = "flex";
    } else {
        document.getElementById("resultadoInvalido").style.display = "none";
        verificarResposta(palpiteJogador);
    }
}

function verificarResposta(palpiteJogador) {
    if (palpiteJogador != resultado) {
        document.querySelector(".telaJogo").style.display = "none";
        document.getElementById("textoDerrota").innerHTML = `Você errou! O resultado era ${resultado}.`;
        document.querySelector(".telaDerrota").style.display = "flex";
    } else if (rodadaAtual == rodadas) {
        document.querySelector(".telaJogo").style.display = "none";
        document.getElementById("textoVitoria").innerHTML = `Parabéns! Você venceu!`;
        document.querySelector(".telaVitoria").style.display = "flex";
    } else {
        document.getElementById("respostaJogador").value = "";
        rodadaAtual++;
        gerarPergunta();
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        let telas = document.querySelectorAll(
            ".telaInicial, .telaRodadas, .telaTabuada, .telaJogo, .telaVitoria, .telaDerrota"
        );

        for (let tela of telas) {
            if (getComputedStyle(tela).display === "flex") {
                let botao = tela.querySelector("button");
                if (botao) {
                    botao.click();
                }
                break;
            }
        }
    }
});
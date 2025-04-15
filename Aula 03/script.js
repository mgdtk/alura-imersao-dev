let rodadas;
let tabuada;
let rodadaAtual = 1;
let resultado;

function escolherRodadas() {
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector(".telaRodadas").style.display = "flex";
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
}

function validarTabuada() {
    tabuada = parseInt(document.getElementById("numTabuada").value);

    if (isNaN(tabuada) || tabuada < 0) {
        document.getElementById("tabuadaInvalida").style.display = "flex";
    } else {
        document.getElementById("tabuadaInvalida").style.display = "none";
        document.querySelector(".telaTabuada").style.display = "none";
        document.querySelector(".telaJogo").style.display = "flex";
        gerarPergunta();
    }
}

function gerarPergunta() {
    let primeiroNumero = Math.floor(Math.random() * (tabuada + 1));
    let segundoNumero = Math.floor(Math.random() * (tabuada + 1));

    resultado = primeiroNumero * segundoNumero;

    document.getElementById("numRodada").innerHTML = `Rodada ${rodadaAtual} de ${rodadas}`;
    document.getElementById("labelMultiplicacao").innerHTML = `Digite o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`;
}

function conferirResposta() {
    let palpiteJogador = document.getElementById("respostaJogador").value;

    while (isNaN(palpiteJogador) || palpiteJogador < 0) {
        document.getElementById("resultadoInvalido").innerHTML = `Entrada inválida. Digite um número para o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`;
        document.getElementById("resultadoInvalido").style.display = "flex";
    }

    if (palpiteJogador != resultado) {
        document.querySelector(".telaJogo").style.display = "none";
        document.getElementById("textoDerrota").innerHTML = `Você errou! O resultado era ${resultado}.`;
        document.querySelector(".telaDerrota").style.display = "flex";
    } else if (rodadaAtual == rodadas) {
        document.querySelector(".telaJogo").style.display = "none";
        document.getElementById("textoVitoria").innerHTML = `Parabéns! Você venceu!`;
        document.querySelector(".telaVitoria").style.display = "flex";
    } else {
        rodadaAtual++;
        gerarPergunta();
    }
}
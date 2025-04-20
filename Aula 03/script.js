let rodadas;
let tabuada;
let rodadaAtual;
let resultado;
let primeiroNumero;
let segundoNumero;
let intervalo;

// Inicializa a primeira rodada e exibe a tela de escolha de rodadas
function escolherRodadas() {
    rodadaAtual = 1;
    document.getElementById("numRodadas").value = "";
    document.getElementById("numTabuada").value = "";
    document.getElementById("respostaJogador").value = "";
    document.getElementById("resultadoInvalido").style.display = "none";
    document.querySelector(".telaDerrota").style.display = "none";
    document.querySelector(".telaVitoria").style.display = "none";
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector(".telaRodadas").style.display = "flex";
    document.getElementById("numRodadas").focus();
}

// Valida o número de rodadas e chama a função para escolher a tabuada
function validarRodadas() {
    rodadas = parseInt(document.getElementById("numRodadas").value);

    if (isNaN(rodadas) || rodadas <= 0) {
        document.getElementById("numRodadasInvalido").style.display = "flex";
    } else {
        document.getElementById("numRodadasInvalido").style.display = "none";
        escolherTabuada();
    }
}

// Exibe a tela para o jogador escolher a tabuada
function escolherTabuada() {
    document.querySelector(".telaRodadas").style.display = "none";
    document.querySelector(".telaTabuada").style.display = "flex";
    document.getElementById("numTabuada").focus();
}

// Valida a tabuada escolhida e exibe a tela do jogo se for válida
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

// Gera uma nova pergunta de multiplicação com base na tabuada e exibe a pergunta ao jogador
function gerarPergunta() {
    iniciarTimer(10);

    primeiroNumero = Math.floor(Math.random() * (tabuada + 1));
    segundoNumero = Math.floor(Math.random() * (tabuada + 1));

    resultado = primeiroNumero * segundoNumero;

    document.getElementById("numRodada").innerHTML = `Rodada ${rodadaAtual} de ${rodadas}`;
    document.getElementById("labelMultiplicacao").innerHTML = `Digite o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`;
    document.getElementById("respostaJogador").focus();
}

// Valida a resposta do jogador e chama a função para verificar se está correta
function conferirResposta() {
    let palpiteJogador = document.getElementById("respostaJogador").value;

    if (isNaN(palpiteJogador) || palpiteJogador < 0 || palpiteJogador == "") {
        document.getElementById("resultadoInvalido").innerHTML = `Entrada inválida. Digite um número para o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`;
        document.getElementById("resultadoInvalido").style.display = "flex";
        document.getElementById("respostaJogador").focus();
    } else {
        document.getElementById("resultadoInvalido").style.display = "none";
        verificarResposta(palpiteJogador);
    }
}

// Verifica a resposta do jogador e decide se o jogo continua ou termina em derrota ou vitória
function verificarResposta(palpiteJogador) {
    pararTimer();
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

// Inicia um temporizador de contagem regressiva para a rodada
function iniciarTimer(tempoInicial) {
    let tempoRestante = tempoInicial;
    const elementoTimer = document.getElementById("timer");
    document.getElementById("timer").style.color = "white";

    elementoTimer.innerHTML = `Tempo restante: ${tempoRestante} segundos`;
    tempoRestante--;

    intervalo = setInterval(() => {
        if (tempoRestante <= 3) {
            document.getElementById("timer").style.color = "#ff1b42";
        }
        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            document.querySelector(".telaJogo").style.display = "none";
            document.getElementById("textoDerrota").innerHTML = `O tempo acabou! O resultado era ${resultado}.`;
            document.querySelector(".telaDerrota").style.display = "flex";
        } else {
            elementoTimer.innerHTML = `Tempo restante: ${tempoRestante} segundos`;
            tempoRestante--;
        }
    }, 1000);
}

// Interrompe o temporizador em andamento
function pararTimer() {
    clearInterval(intervalo);
}

// Permite que o jogador navegue pelas telas e submeta ações ao pressionar "Enter"
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
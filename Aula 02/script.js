let nomeJogador = "";

function jogar() {
    document.querySelector(".telaIniciar").style.display = "none";
    document.querySelector(".telaIdade").style.display = "flex";
}

function verificarIdade() {
    let idade = document.getElementById("inputIdade").value;

    if (isNaN(idade) || idade == "" || idade < 0 || idade > 99) {
        document.getElementById("idadeInvalida").style.display = "flex";
        idade = document.getElementById("inputIdade").value;
    } else {
        document.getElementById("idadeInvalida").style.display = "none";

        if (idade < 18) {
            cancelarJogo();
        } else {
            telaNome();
        }
    }

    document.getElementById("inputIdade").value = "";
}

function cancelarJogo() {
    document.querySelector(".validarIdade").style.display = "none";
    document.getElementById("idadeInsuficiente").style.display = "flex";
}

function telaNome() {
    document.querySelector(".telaIdade").style.display = "none";
    document.querySelector(".telaNome").style.display = "flex";
}

function verificarNome() {
    nomeJogador = document.getElementById("inputNome").value;

    if (nomeJogador == "") {
        document.getElementById("nomeInvalido").style.display = "flex";
        nomeJogador = document.getElementById("inputNome").value;
    } else {
        document.getElementById("nomeInvalido").style.display = "none";

        comecarJogo();
    }
}

function comecarJogo() {
    document.querySelector(".telaResultado").style.display = "none";
    document.getElementById("jogadaInvalida").style.display = "none";
    document.querySelector(".telaNome").style.display = "none";
    document.querySelector(".telaJogo").style.display = "flex";
}

function verificarJogada() {
    let jogada = document.getElementsByName("escolha");

    let selecionado = false;
    let valor;

    for (let i = 0; i < jogada.length; i++) {
        if (jogada[i].checked) {
            selecionado = true;
            document.querySelector(".telaJogo").style.display = "none";
            valor = i + 1;
            break;
        }
    }

    if (!selecionado) {
        document.getElementById("jogadaInvalida").style.display = "flex";
    } else {
        document.querySelector(".telaJogo").style.display = "none";

        calcularJogada(valor);
    }

    for (let i = 0; i < jogada.length; i++) {
        jogada[i].checked = false;
    }
}

function calcularJogada(escolhaJogador) {
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    const escolhas = {
        1: "pedra",
        2: "papel",
        3: "tesoura"
    };

    document.querySelector(".telaResultado").style.display = "flex";

    if (escolhaJogador == escolhaComputador) {
        document.getElementById("resultadoJogada").innerHTML = `Empate! O computador escolheu ${escolhas[escolhaComputador]}.`;
    } else if ((escolhaJogador == 1 && escolhaComputador == 3) || (escolhaJogador == 2 && escolhaComputador == 1) || (escolhaJogador == 3 && escolhaComputador == 2)) {
        document.getElementById("resultadoJogada").innerHTML = `${nomeJogador} vence! O computador escolheu ${escolhas[escolhaComputador]}.`;
    } else {
        document.getElementById("resultadoJogada").innerHTML = `Computador vence! O computador escolheu ${escolhas[escolhaComputador]}.`;
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const fimDeJogo = async () => {
    document.querySelector(".telaResultado").style.display = "none";
    document.querySelector(".telaFim").style.display = "flex";

    await delay(3000);
    
    document.querySelector(".telaFim").style.display = "none";
    document.querySelector(".telaIniciar").style.display = "flex";
    document.getElementById("inputNome").value = "";
}
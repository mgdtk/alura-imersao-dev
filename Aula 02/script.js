let nomeJogador = "";
let partidas = 0;
let vitorias = 0;

// Função para delay (espera)
const delay = ms => new Promise(res => setTimeout(res, ms));

function jogar() {
    document.querySelector(".telaIniciar").style.display = "none";
    document.querySelector(".telaIdade").style.display = "flex";
    document.querySelector(".validarIdade").style.display = "flex";
}

// Verificar a idade inserida
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

// Cancelar o jogo se a idade for insuficiente
const cancelarJogo = async () => {
    document.querySelector(".validarIdade").style.display = "none";
    document.getElementById("idadeInsuficiente").style.display = "flex";

    await delay(5000);

    document.getElementById("idadeInsuficiente").style.display = "none";
    document.querySelector(".telaIniciar").style.display = "flex";
}

// Exibir a tela de nome do jogador
function telaNome() {
    document.querySelector(".telaIdade").style.display = "none";
    document.querySelector(".telaNome").style.display = "flex";
}

// Verificar o nome inserido
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

// Começar o jogo, exibindo a tela de jogo
function comecarJogo() {
    document.querySelector(".telaResultado").style.display = "none";
    document.getElementById("jogadaInvalida").style.display = "none";
    document.querySelector(".telaNome").style.display = "none";
    document.querySelector(".telaJogo").style.display = "flex";
}

// Verificar a jogada do jogador
function verificarJogada() {
    let jogada = document.getElementsByName("escolha");

    let selecionado = false;
    let valor;

    // Verifica qual opção o jogador escolheu
    for (let i = 0; i < jogada.length; i++) {
        if (jogada[i].checked) {
            selecionado = true;
            document.querySelector(".telaJogo").style.display = "none";
            valor = i + 1; // Armazena o valor da jogada (1 = pedra, 2 = papel, 3 = tesoura)
            break;
        }
    }

    // Se nenhuma jogada for selecionada, exibe a mensagem de jogada inválida
    if (!selecionado) {
        document.getElementById("jogadaInvalida").style.display = "flex";
    } else {
        document.querySelector(".telaJogo").style.display = "none";

        calcularJogada(valor);
    }

    // Desmarca todas as opções de jogada para a rodada seguinte
    for (let i = 0; i < jogada.length; i++) {
        jogada[i].checked = false;
    }
}

// Calcular o resultado da jogada
function calcularJogada(escolhaJogador) {
    partidas++;
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
        vitorias++;
        document.getElementById("resultadoJogada").innerHTML = `${nomeJogador} vence! O computador escolheu ${escolhas[escolhaComputador]}.`;
    } else {
        document.getElementById("resultadoJogada").innerHTML = `Computador vence! O computador escolheu ${escolhas[escolhaComputador]}.`;
    }
}

// Finalizar o jogo e mostrar os resultados finais
const fimDeJogo = async () => {
    document.querySelector(".telaResultado").style.display = "none";
    document.querySelector(".telaFim").style.display = "flex";

    if (vitorias >= (partidas / 2)) {
        document.getElementById("resultadoJogo").innerHTML = `Você venceu ${vitorias} de ${partidas} partidas. Parabéns!`;
    } else {
        document.getElementById("resultadoJogo").innerHTML = `Você venceu ${vitorias} de ${partidas} partidas. Mais sorte na próxima!`;
    }

    partidas = 0;
    vitorias = 0;

    await delay(3000);
    
    document.querySelector(".telaFim").style.display = "none";
    document.querySelector(".telaIniciar").style.display = "flex";
    document.getElementById("inputNome").value = "";
}
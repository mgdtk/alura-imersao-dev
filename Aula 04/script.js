let forcaTotalJogador = 0;
let forcaTotalComputador = 0;

function escolher() {
    document.getElementById("escolherBtn").style.display = "none";
    document.getElementById("inputsPersonagens").style.display = "flex";
    document.getElementById("labelPersonagensJogador").style.display = "flex";
    document.getElementById("comecarBtn").style.display = "flex";
    document.getElementById("escolherTexto").style.display = "none";
}

function jogar() {
    document.getElementById("inputsPersonagens").style.display = "none";
    document.getElementById("labelPersonagensJogador").style.display = "none";
    document.getElementById("comecarBtn").style.display = "none";

    const personagensJogador = document.querySelectorAll(".personagemJogador");
    let forcaJogador = [0, 0, 0];
    let forcaComputador = [0, 0, 0];

    for (let i = 0; i < personagensJogador.length; i++) {
        forcaJogador[i] = Math.floor(Math.random() * 5) + 1;
        forcaComputador[i] = Math.floor(Math.random() * 5) + 1;
        console.log(personagensJogador[i].value); // Controle
        console.log(forcaJogador[i]); // Controle
    }

    forcaTotalJogador = forcaJogador.reduce((acc, valor) => acc + valor, 0);
    forcaTotalComputador = forcaComputador.reduce((acc, valor) => acc + valor, 0);

    document.getElementById("resultadoBtn").style.display = "flex";
}

function verResultado() {
    document.getElementById("resultadoBtn").style.display = "none";
    let resultado = document.getElementById("resultadoFinal");

    if (forcaTotalJogador > forcaTotalComputador) {
        resultado.textContent = "Parabéns! O seu time venceu!";
    } else if (forcaTotalJogador == forcaTotalComputador) {
        resultado.textContent = "Empate!";
    } else {
        resultado.textContent = "Você perdeu...";
    }

    let infoForcaJogador = document.getElementById("informacoesJogador");
    let infoForcaComputador = document.getElementById("informacoesComputador");

    infoForcaJogador.textContent = `A força total do seu time foi: ${forcaTotalJogador}`;
    infoForcaComputador.textContent = `A força total do time do computador foi: ${forcaTotalComputador}`;
}
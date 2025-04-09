let forcaTotalJogador = 0;
let forcaTotalComputador = 0;
let forcaJogador = [0, 0, 0];
let forcaComputador = [0, 0, 0];

const personagensJogador = document.querySelectorAll(".personagemJogador");

// const personagensComputador = {
//     "Harry Potter": 5,
//     "Lord Voldemort": 5,
//     "Albus Dumbledore": 5,
//     "Hermione Granger": 4,
//     "Severus Snape": 4,
//     "Draco Malfoy": 3,
//     "Sirius Black": 4,
//     "Minerva McGonagall": 4,
//     "Rubeus Hagrid": 3,
//     "Ginny Weasley": 3,
//     "Neville Longbottom": 3,
//     "Luna Lovegood": 2,
//     "Fred Weasley": 2,
//     "George Weasley": 2,
//     "Remus Lupin": 4,
//     "Bellatrix Lestrange": 4,
//     "Lucius Malfoy": 3,
//     "Dolores Umbridge": 2,
//     "Molly Weasley": 3,
//     "Arthur Weasley": 2,
//     "Cedric Diggory": 3,
//     "Cho Chang": 2,
//     "Kingsley Shacklebolt": 4,
//     "Nymphadora Tonks": 3,
//     "Gilderoy Lockhart": 1,
//     "Filius Flitwick": 3,
//     "Horace Slughorn": 3,
//     "Peter Pettigrew": 1,
//     "Victor Krum": 3
// };

function escolher() {
    document.querySelector(".telaInicio").style.display = "none";
    document.querySelector(".selecionarPersonagens").style.display = "flex";
    document.querySelector(".inputsPersonagens").style.display = "flex";
}

function jogar() {
    document.querySelector(".selecionarPersonagens").style.display = "none";
    document.querySelector(".telaResultado").style.display = "flex";

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

    document.getElementById("forcaTotalJogador").innerHTML = `A força total do seu time foi: ${forcaTotalJogador}`;
    document.getElementById("forcaTotalComputador").innerHTML = `A força total do time do computador foi: ${forcaTotalComputador}`;
    document.querySelector(".informacoesResultados").style.display = "flex";

    document.querySelector(".forcasPersonagensJogador").style.display = "flex";
    document.querySelector(".forcasPersonagensJogador").style.display = "flex";

    console.log(forcaJogador.length);
    for (let i = 0; i < forcaJogador.length; i++) {
        document.getElementById(`forca${i+1}Jogador`).innerHTML = `A força do personagem ${personagensJogador[i].value} foi ${forcaJogador[i]}`;
        // document.getElementById(`forca${i+1}Computador`).innerHTML = `A força do personagem ${personagensComputador[i].value} foi ${forcaComputador[i]}`;
    }
}
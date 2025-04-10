let forcaTotalJogador = 0;
let forcaTotalComputador = 0;
let forcaJogador = [0, 0, 0];
let forcaComputador = [0, 0, 0];

const personagensJogador = document.querySelectorAll(".personagemJogador");
const personagensAtuaisComputador = [];

const personagensComputador = [
    {nome: "Harry Potter", forca: 5},
    {nome: "Lord Voldemort", forca: 5},
    {nome: "Albus Dumbledore", forca: 5},
    {nome: "Hermione Granger", forca: 4},
    {nome: "Severus Snape", forca: 4},
    {nome: "Draco Malfoy", forca: 3},
    {nome: "Sirius Black", forca: 4},
    {nome: "Minerva McGonagall", forca: 4},
    {nome: "Rubeus Hagrid", forca: 3},
    {nome: "Ginny Weasley", forca: 3},
    {nome: "Neville Longbottom", forca: 3},
    {nome: "Luna Lovegood", forca: 2},
    {nome: "Fred Weasley", forca: 2},
    {nome: "George Weasley", forca: 2},
    {nome: "Remus Lupin", forca: 4},
    {nome: "Bellatrix Lestrange", forca: 4},
    {nome: "Lucius Malfoy", forca: 3},
    {nome: "Dolores Umbridge", forca: 2},
    {nome: "Molly Weasley", forca: 3},
    {nome: "Arthur Weasley", forca: 2},
    {nome: "Cedric Diggory", forca: 3},
    {nome: "Cho Chang", forca: 2},
    {nome: "Kingsley Shacklebolt", forca: 4},
    {nome: "Nymphadora Tonks", forca: 3},
    {nome: "Gilderoy Lockhart", forca: 1},
    {nome: "Filius Flitwick", forca: 3},
    {nome: "Horace Slughorn", forca: 3},
    {nome: "Peter Pettigrew", forca: 1},
    {nome: "Victor Krum", forca: 3},
    {nome: "Percy Weasley", forca: 3}
];

function escolher() {
    document.querySelector(".telaInicio").style.display = "none";
    document.querySelector(".selecionarPersonagens").style.display = "flex";
    document.querySelector(".inputsPersonagens").style.display = "flex";
}

function verificarNomes() {
    let nome1 = document.getElementById("personagemJogador1").value;
    let nome2 = document.getElementById("personagemJogador2").value;
    let nome3 = document.getElementById("personagemJogador3").value;

    if (nome1 == "" || nome2 == "" || nome3 == "") {
        document.getElementById("nomeInvalido").style.display = "flex";
        nome1 = document.getElementById("personagemJogador1").value;
        nome2 = document.getElementById("personagemJogador2").value;
        nome3 = document.getElementById("personagemJogador3").value;
    } else {
        document.getElementById("nomeInvalido").style.display = "none";

        jogar();
    }
}

function jogar() {
    document.querySelector(".selecionarPersonagens").style.display = "none";
    document.querySelector(".telaResultado").style.display = "flex";

    for (let i = 0; i < personagensJogador.length; i++) {
        forcaJogador[i] = Math.floor(Math.random() * 5) + 1;

        let indiceAleatorio = Math.floor(Math.random() * personagensComputador.length);
        let personagemEscolhido = personagensComputador.splice(indiceAleatorio, 1)[0];
        personagensAtuaisComputador.push(personagemEscolhido);
        forcaComputador[i] = personagemEscolhido.forca;

        // Controle dos valores
        console.log(`Força jogador: ${forcaJogador[i]}`);
        console.log(`Personagem aleatório escolhido: ${personagemEscolhido.nome}`);
        console.log(`Força computador: ${forcaComputador[i]}`);
        console.log(personagensAtuaisComputador);
        console.log(personagensComputador);
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
    document.querySelector(".forcasPersonagensComputador").style.display = "flex";

    for (let i = 0; i < forcaJogador.length; i++) {
        document.getElementById(`forca${i+1}Jogador`).innerHTML = `A força do personagem ${personagensJogador[i].value} foi ${forcaJogador[i]}`;
        document.getElementById(`forca${i+1}Computador`).innerHTML = `A força do personagem ${personagensAtuaisComputador[i].nome} foi ${forcaComputador[i]}`;
    }
}
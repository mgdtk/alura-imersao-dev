function jogar() {
    document.getElementById("jogoTitulo").style.display = "none";
    document.getElementById("jogo").style.display = "none";
    document.getElementById("jogarBtn").style.display = "none";
    document.getElementById("labelIdade").style.display = "flex";
    document.getElementById("inputIdade").style.display = "flex";
    document.getElementById("validacaoIdadeBtn").style.display = "flex";

    //     let escolhaJogador = parseInt(prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura."));

    //     while (escolhaJogador !== 1 && escolhaJogador !== 2 && escolhaJogador !== 3) {
    //         escolhaJogador = parseInt(prompt("Entrada inválida. Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura."));
    //     }

    //     let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    //     let escolhas = {
    //         1: "pedra",
    //         2: "papel",
    //         3: "tesoura"
    //     };

    //     if (escolhaJogador == escolhaComputador) {
    //         alert(`Empate! O computador escolheu ${escolhas[escolhaComputador]}.`);
    //     } else if ((escolhaJogador == 1 && escolhaComputador == 3) || (escolhaJogador == 2 && escolhaComputador == 1) || (escolhaJogador == 3 && escolhaComputador == 2)) {
    //         alert(`${nome} vence! O computador escolheu ${escolhas[escolhaComputador]}.`);
    //     } else {
    //         alert(`Computador vence! O computador escolheu ${escolhas[escolhaComputador]}.`);
    //     }
    // }
}

function verificarIdade() {
    const idade = document.getElementById("inputIdade").value;

    while (isNaN(idade) || idade == "" || idade < 0 || idade > 99) {
        document.getElementById("idadeInvalida").style.display = "flex";
        idade = document.getElementById("inputIdade").value;
    }

    document.getElementById("idadeInvalida").style.display = "none";

    if (idade < 18) {
        cancelarJogo();
    } else {
        telaNome();
    }
}

function cancelarJogo() {
    document.getElementById("labelIdade").style.display = "none";
    document.getElementById("inputIdade").style.display = "none";
    document.getElementById("validacaoIdadeBtn").style.display = "none";
    document.getElementById("idadeInsuficiente").style.display = "flex";
}

function telaNome() {
    document.getElementById("labelIdade").style.display = "none";
    document.getElementById("inputIdade").style.display = "none";
    document.getElementById("validacaoIdadeBtn").style.display = "none";
    document.getElementById("nomeTitulo").style.display = "flex";
    document.getElementById("labelNome").style.display = "flex";
    document.getElementById("inputNome").style.display = "flex";
    document.getElementById("enviarNome").style.display = "flex";
}

function verificarNome() {
    const nomeJogador = document.getElementById("inputNome").value;

    while (nomeJogador == "") {
        document.getElementById("nomeInvalido").style.display = "flex";
        nomeJogador = document.getElementById("inputNome").value;
    }

    document.getElementById("nomeInvalido").style.display = "none";

    comecarJogo();
}

function comecarJogo() {
    document.getElementById("nomeTitulo").style.display = "none";
    document.getElementById("labelNome").style.display = "none";
    document.getElementById("inputNome").style.display = "none";
    document.getElementById("enviarNome").style.display = "none";
}
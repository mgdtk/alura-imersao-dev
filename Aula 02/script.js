idade = prompt("Quantos anos você tem?");

if (idade < 18) {
    alert("Você NÃO pode jogar jokenpô.");
}

if (idade >= 18) {
    escolhaJogador = prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura.");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    // Jogador Pedra, Computador Pedra --> Empate
    // Jogador Tesoura, Computador Tesoura --> Empate
    // Jogador Papel, Computador Papel --> Empate
    if (escolhaJogador == escolhaComputador) {
        alert("Empate!");
    }

    if (escolhaJogador == 1) {
        // Jogador Pedra, Computador Papel --> Computador vence
        if (escolhaComputador == 2) {
            alert("Computador vence! O computador escolheu papel.");
        }
        // Jogador Pedra, Computador Tesoura --> Jogador vence
        if (escolhaComputador == 3) {
            alert("Você vence! O computador escolheu tesoura.");
        }
    }

    if (escolhaJogador == 2) {
        // Jogador Papel, Computador Pedra --> Jogador vence
        if (escolhaComputador == 1) {
            alert("Você vence! O computador escolheu pedra.");
        }
        // Jogador Papel, Computador Tesoura --> Computador vence
        if (escolhaComputador == 3) {
            alert("Computador vence! O computador escolheu tesoura.");
        }
    }

    if (escolhaJogador == 3) {
        // Jogador Tesoura, Computador Pedra --> Computador vence
        if (escolhaComputador == 1) {
            alert("Computador vence! O computador escolheu pedra.");
        }
        // Jogador Tesoura, Computador Papel --> Jogador vence
        if (escolhaComputador == 2) {
            alert("Você vence! O computador escolheu papel.");
        }
    }

    alert("escolhaComputador: " + escolhaComputador);
}
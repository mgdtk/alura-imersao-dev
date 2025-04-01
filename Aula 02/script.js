function jogar() {
    let idade = prompt("Quantos anos você tem?");

    while (isNaN(idade) || idade == "" || idade < 0 || idade > 99) {
        idade = prompt("Digite uma idade válida.");
    }

    if (idade < 18) {
        alert("Você NÃO pode jogar jokenpô.");
    } else {
        let nome = prompt("Qual é o seu nome?");

        let escolhaJogador = parseInt(prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura."));

        while (escolhaJogador !== 1 && escolhaJogador !== 2 && escolhaJogador !== 3) {
            escolhaJogador = parseInt(prompt("Entrada inválida. Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura."));
        }

        let escolhaComputador = Math.floor(Math.random() * 3) + 1;

        let escolhas = {
            1: "pedra",
            2: "papel",
            3: "tesoura"
        };

        if (escolhaJogador == escolhaComputador) {
            alert(`Empate! O computador escolheu ${escolhas[escolhaComputador]}.`);
        } else if ((escolhaJogador == 1 && escolhaComputador == 3) || (escolhaJogador == 2 && escolhaComputador == 1) || (escolhaJogador == 3 && escolhaComputador == 2)) {
            alert(`${nome} vence! O computador escolheu ${escolhas[escolhaComputador]}.`);
        } else {
            alert(`Computador vence! O computador escolheu ${escolhas[escolhaComputador]}.`);
        }
    }
}
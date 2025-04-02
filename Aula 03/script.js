function jogar() {
    let rodada = 1;
    let vitoria = 0;

    while (rodada <= 3) {
        console.log(`Rodada: ${rodada}`);

        let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
        let escolhaJogador = parseInt(prompt(`Rodada ${rodada}. Escolha o vidro 1, 2 ou 3.`));
        
        while (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3) {
            escolhaJogador = parseInt(prompt(`Entrada inválida. Digite 1, 2 ou 3.`));
        }

        if (escolhaJogador == pisoQuebrado) {
            alert("O vidro quebrou! Você perdeu.");
            break;
        } else {
            alert(`Passou! O piso quebrado era o vidro ${pisoQuebrado}.`);
            if (rodada == 3) {
                vitoria = 1;
            }
        }

        rodada += 1;
    }

    console.log(vitoria);

    if (vitoria) {
        alert("Parabéns! Você venceu!");
    }
}
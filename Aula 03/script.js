rodada = 1;

while (rodada <= 3) {
    console.log(`Rodada: ${rodada}`);

    escolhaJogador = prompt(`Rodada ${rodada}. Escolha o vidro 1, 2 ou 3.`);
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado) {
        alert("O vidro quebrou! Você perdeu.");
        rodada = 1000;
    } else {
        alert(`Passou! O piso quebrado era o vidro ${pisoQuebrado}`);
    }

    rodada = rodada + 1;
}

if (rodada == 4) {
    alert("Parabéns! Você venceu!");
}
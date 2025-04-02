function jogar() {
    let rodadas = prompt("Quantas rodadas deseja jogar?");
    if (verificarCancelamento(rodadas)) return;
    rodadas = parseInt(rodadas);

    while (isNaN(rodadas) || rodadas < 1) {
        rodadas = prompt("Entrada inválida. Digite o número de rodadas que deseja jogar.");
        if (verificarCancelamento(rodadas)) return;
        rodadas = parseInt(rodadas);
    }

    let tabuada = prompt("Deseja ser desafiado até a tabuada de qual número?");
    if (verificarCancelamento(tabuada)) return;
    tabuada = parseInt(tabuada);

    while (isNaN(tabuada) || tabuada < 0) {
        tabuada = prompt("Entrada inválida. Digite o número da tabuada limite que gostaria de jogar.");
        if (verificarCancelamento(tabuada)) return;
        tabuada = parseInt(tabuada);
    }

    for (let i = 1; i < (rodadas + 1); i++) {
        let primeiroNumero = Math.floor(Math.random() * (tabuada + 1));
        let segundoNumero = Math.floor(Math.random() * (tabuada + 1));

        let resultado = primeiroNumero * segundoNumero;

        let palpiteJogador = prompt(`Rodada ${i} de ${rodadas}. Digite o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`);
        if (verificarCancelamento(palpiteJogador)) return;

        while (isNaN(palpiteJogador) || palpiteJogador == "") {
            palpiteJogador = prompt(`Entrada inválida. Digite um número para o resultado da seguinte multiplicação: ${primeiroNumero}x${segundoNumero}`);
            if (verificarCancelamento(palpiteJogador)) return;
        }

        if (palpiteJogador != resultado) {
            alert(`Você errou! O resultado era ${resultado}.`);
            return;
        } else {
            alert(`Acertou!`);
            if (i == rodadas) {
                alert("Parabéns! Você venceu!");
            }
        }
    }
}

function verificarCancelamento(valor) {
    if (valor === null) {
        console.log("Operação cancelada.");
        return true;
    }
    return false;
}
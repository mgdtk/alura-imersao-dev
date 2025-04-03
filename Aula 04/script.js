jogador = ["", "", ""];
computador = ["", "", ""];

forcaJogador = 0;
forcaComputador = 0;

for (let i = 0; i < 3; i++) {
    escolhaPersonagem = prompt(`Digite o nome do seu personagem ${i + 1}.`);
    jogador[i] = escolhaPersonagem;
    forcaJogador += Math.floor(Math.random() * 10) + 1;
}

for (let i = 0; i < 3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 10);
    personagensComputador = ["Voldemort", "Bellatrix", "Draco", "Lúcio", "Grindelwald", "Harry", "Hermione", "Ron", "Luna", "Snape"];
    computador[i] = personagensComputador[indiceAleatorio];
    forcaComputador += Math.floor(Math.random() * 10) + 1;
}

console.log(jogador);
console.log(computador);

if (forcaJogador > forcaComputador) {
    alert(`Você venceu o cabo de guerra!\nA força do seu time foi ${forcaJogador}, enquanto que a do seu time oponente foi ${forcaComputador}.`);
} else if (forcaJogador == forcaComputador) {
    alert(`Empate!\nO seu time e o seu time oponente tiveram a mesma força de ${forcaJogador}.`);
} else {
    alert(`O computador venceu o cabo de guerra!\nA força do time dele foi ${forcaComputador}, enquanto que a do seu time foi ${forcaJogador}.`);
}
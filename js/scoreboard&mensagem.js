import { imgJogador1, imgJogador2 } from "./selectPersonagem.js";
let personagemJogador1 = document.querySelector("#x-scoreboard img");
let personagemJogador2 = document.querySelector("#bola-scoreboard img");

let scoreboardX = document.getElementById("scoreboard-1");
let scoreboardBola = document.getElementById("scoreboard-2");
let div = document.getElementById("mensagem");
let msg = div.querySelector("p");

export function mensagem(vencedor) {
  if (vencedor === "X") {
    msg.classList.remove("corJogador2");
    msg.textContent = "JOGADOR 1 VENCEU!";
    msg.classList.add("corJogador1");
  } else if (vencedor === "Bola") {
    msg.classList.remove("corJogador1");
    msg.textContent = "JOGADOR 2 VENCEU!";
    msg.classList.add("corJogador2");
  } else {
    msg.classList.remove("corJogador1");
    msg.classList.remove("corJogador2");
    msg.textContent = "Deu velha :(";
  }
  div.classList.remove("hide");
}

export function atualizarPlacar(vencedor) {
  if (vencedor === "X") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    setTimeout(() => mensagem("X"), 1300);
  } else if (vencedor === "Bola") {
    scoreboardBola.textContent = parseInt(scoreboardBola.textContent) + 1;
    setTimeout(() => mensagem("Bola"), 1300);
  } else {
    setTimeout(() => mensagem(), 500);
  }
}

export function atualizarScoreboard() {
  if (imgJogador1) {
    personagemJogador1.src = imgJogador1;
  }
  if (imgJogador2) {
    personagemJogador2.src = imgJogador2;
  }
}

export { div };

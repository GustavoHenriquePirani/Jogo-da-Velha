import { jogarDoisPlayers } from "./script.js";
import {
  personagemJogador1,
  personagemJogador2,
  limparPersonagem,
} from "./selectPersonagem.js";
import { div } from "./scoreboard&mensagem.js";

const botaoJogar = document.getElementById("jogar");
const botaoStart = document.getElementById("start");
const botaoJogarNovamente = document.getElementById("jogarNovamente");
const botaoParar = document.getElementById("parar");
const grade = document.getElementById("grade-container");
const placar = document.getElementById("scoreboard-container");
const escolherPersonagem = document.getElementById("escolher_personagem");
const boxGrade = document.querySelectorAll(".box");
const placarX = document.getElementById("scoreboard-1");
const placarBola = document.getElementById("scoreboard-2");

botaoJogar.addEventListener("click", function () {
  const player1Selecionado =
    document.querySelector(".player1_selected") !== null;
  const player2Selecionado =
    document.querySelector(".player2_selected") !== null;

  if (player1Selecionado && player2Selecionado) {
    let player1 = 0;
    let player2 = 0;
    jogarDoisPlayers(player1, player2);
    escolherPersonagem.classList.add("hide");
    grade.classList.remove("hide");
    placar.classList.remove("hide");
  }
});

botaoStart.addEventListener("click", function () {
  grade.classList.add("hide");
  escolherPersonagem.classList.remove("hide");
  botaoStart.classList.add("hide");
});

botaoJogarNovamente.addEventListener("click", function () {
  div.classList.add("hide");
  boxGrade.forEach((box) => {
    box.innerHTML = "";
  });
  let player1 = 0;
  let player2 = 0;
  jogarDoisPlayers(player1, player2);
});

botaoParar.addEventListener("click", function () {
  div.classList.add("hide");
  placar.classList.add("hide");
  botaoStart.classList.remove("hide");
  boxGrade.forEach((box) => {
    box.innerHTML = "";
  });
  limparPersonagem(personagemJogador1, "player1_selected");
  limparPersonagem(personagemJogador2, "player2_selected");
  placarX.textContent = "0";
  placarBola.textContent = "0";
});

import { jogarDoisPlayers } from "./script.js";
import { player1Selecionado, player2Selecionado } from "./selectPersonagem.js";
import { div } from "./scoreboard&mensagem.js";

let botaoJogar = document.getElementById("jogar");
let botaoStart = document.getElementById("start");
let botaoJogarNovamente = document.getElementById("jogarNovamente");
let grade = document.getElementById("grade-container");
let placar = document.getElementById("scoreboard-container");
let escolherPersonagem = document.getElementById("escolher_personagem");
let boxGrade = document.querySelectorAll(".box");

botaoJogar.addEventListener("click", function () {
  if (player1Selecionado && player2Selecionado) {
    let player1 = 0;
    let player2 = 0;
    jogarDoisPlayers(player1, player2);
    setTimeout(() => escolherPersonagem.classList.add("hide"));
    grade.classList.remove("hide");
    placar.classList.remove("hide");
  }
});

botaoStart.addEventListener("click", function () {
  placar.classList.add("hide");
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

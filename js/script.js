import { checkWinCondition } from "./checkWin.js";
import { atualizarPlacar } from "./scoreboard&mensagem.js";
import { atualizarScoreboard } from "./scoreboard&mensagem.js";

//CRIANDO JOGO PARA DOIS PLAYERS
export function jogarDoisPlayers(player1, player2) {
  // CAPTURA OS ELEMENTOS
  let x = document.querySelector(".x");
  let bola = document.querySelector(".o");
  let boxes = document.querySelectorAll(".box");
  let terminarJogo = false;
  let vencedor = null;

  atualizarScoreboard();

  function handleClick(event) {
    if (terminarJogo) return;
    //DESCOBRIR QUEM É O JOGADOR DA VEZ
    let jogada = player1 == player2 ? x : bola;

    //VERIFICA SE A BOX ESTÁ VAZIA
    if (this.childNodes.length == 0) {
      let cloneJogada = jogada.cloneNode(true);
      this.appendChild(cloneJogada);

      if (checkWinCondition()) {
        vencedor = player1 == player2 ? "X" : "Bola";
        terminarJogo = true;

        atualizarPlacar(vencedor);
        boxes.forEach((box) => box.removeEventListener("click", handleClick));
      }

      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      if (player1 + player2 == 9 && terminarJogo == false) {
        atualizarPlacar(vencedor);
        terminarJogo = true;
      }
    }
  }
  boxes.forEach((box) => box.addEventListener("click", handleClick));
}

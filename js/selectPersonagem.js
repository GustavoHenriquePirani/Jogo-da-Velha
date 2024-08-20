// Seleciona os personagens para cada jogador
let personagemJogador1 = document.querySelectorAll(
  "#personagem1 .personagens div img"
);
let personagemJogador2 = document.querySelectorAll("#personagem2 div img");
let imgJogador1 = "";
let imgJogador2 = "";
let player1Selecionado = false;
let player2Selecionado = false;

// Função genérica para selecionar personagem
function selecionarPersonagem(personagens, classeSelecionada, jogador) {
  personagens.forEach((personagem) => {
    personagem.addEventListener("click", () => {
      limparPersonagem(personagens, classeSelecionada);

      personagem.classList.add(classeSelecionada);

      if (jogador === 1) {
        imgJogador1 = personagem.src;
        player1Selecionado = true;
      } else {
        imgJogador2 = personagem.src;
        player2Selecionado = true;
      }
      atualizarPersonagens();
    });
  });
}

selecionarPersonagem(personagemJogador1, "player1_selected", 1);
selecionarPersonagem(personagemJogador2, "player2_selected", 2);

function limparPersonagem(personagens, classeSelecionada) {
  personagens.forEach((p) => p.classList.remove(classeSelecionada));
}

function atualizarPersonagens() {
  const xImg = document.querySelector(".x img");
  const oImg = document.querySelector(".o img");

  if (xImg) xImg.src = imgJogador1;
  if (oImg) oImg.src = imgJogador2;
}

export {
  selecionarPersonagem,
  limparPersonagem,
  imgJogador1,
  imgJogador2,
  personagemJogador1,
  personagemJogador2,
};

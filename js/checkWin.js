let b1 = document.getElementById("block-1");
let b2 = document.getElementById("block-2");
let b3 = document.getElementById("block-3");
let b4 = document.getElementById("block-4");
let b5 = document.getElementById("block-5");
let b6 = document.getElementById("block-6");
let b7 = document.getElementById("block-7");
let b8 = document.getElementById("block-8");
let b9 = document.getElementById("block-9");

function aplicarAnimacaoVitoria(celulasVencedoras) {
  celulasVencedoras.forEach((celula) => {
    celula.classList.add("latejar");
  });
}

export function checkWinCondition() {
  const winConditions = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
    [b1, b5, b9],
    [b3, b5, b7],
  ];

  for (let condition of winConditions) {
    const [first, second, third] = condition;

    if (
      first.childNodes.length > 0 &&
      second.childNodes.length > 0 &&
      third.childNodes.length > 0 &&
      first.childNodes[0].className === second.childNodes[0].className &&
      first.childNodes[0].className === third.childNodes[0].className
    ) {
      aplicarAnimacaoVitoria([
        first.childNodes[0],
        second.childNodes[0],
        third.childNodes[0],
      ]);
      return true;
    }
  }
  return false;
}

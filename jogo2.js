const first = document.querySelectorAll(".carta");

let primeiroclique = null;
let segundoclique = null;
let bloqueado = false;

first.forEach((item) => {
  item.addEventListener("click", () => {
    if (bloqueado) {
      return;
    }

    if (primeiroclique === item) {
      return;
    }
    item.classList.add("ativo");

    if (!primeiroclique) {
      primeiroclique = item;
    } else {
      segundoclique = item;
      verificarcartas();
    }
  });
});

let ganhar = 0;

function vencedor() {
  if (ganhar === 3) {
    setTimeout(() => {
      winner.style.display = "flex";
    }, 1000);
  }
}

function verificarcartas() {
  const valor1 = primeiroclique.dataset.valor;
  const valor2 = segundoclique.dataset.valor;

  if (valor1 === valor2) {
    primeiroclique = null;
    segundoclique = null;
    ganhar++;
    vencedor();
    console.log(ganhar);
  } else {
    bloqueado = true;

    setTimeout(() => {
      perder();
      primeiroclique.classList.remove("ativo");
      segundoclique.classList.remove("ativo");

      primeiroclique = null;
      segundoclique = null;

      bloqueado = false;
    }, 1000);
  }
}

const vidas = [
  {
    vida: "3",
  },
  {
    vida: "2",
  },
  {
    vida: "1",
  },
  {
    vida: "0",
  },
];

const coracao = document.querySelector(".primary_estrela a");
let chances = 0;
coracao.innerHTML = vidas[chances].vida;

function perder() {
  chances++;
  coracao.innerHTML = vidas[chances].vida;

  if (vidas[chances].vida === "0") {
    gameover.classList.add("ativo");
  }
}

const gameover = document.querySelector(".second");

const winner = document.querySelector(".third");

const botaofour = document.querySelector(".four_botao");
botaofour.addEventListener("click", () => {
  four.classList.add("remove");
  primary.classList.add("primary_ativo");
});

const primary = document.querySelector(".primary");
const four = document.querySelector(".four");

const reiniciar = document.querySelector(".second_botao");
reiniciar.addEventListener("click", () => {
  location.reload();
});

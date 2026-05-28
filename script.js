const jogo = document.querySelectorAll(".second_jogo");
jogo.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("subir");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("subir");
  });
});

const jogo1 = document.querySelector("#jogo1");
jogo1.addEventListener("click", function () {
  window.location.href = "jogos/jogo1.html";
});

const jogo2 = document.querySelector("#jogo2");
jogo2.addEventListener("click", function () {
  window.location.href = "jogos/jogo2.html";
});

const jogo3 = document.querySelector("#jogo3");
jogo3.addEventListener("click", function () {
  window.location.href = "jogos/jogo3.html";
});

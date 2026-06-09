const tempo = document.querySelector(".primary_gradual");

const question = document.querySelector("#titulopag");

const numeropergunta = document.querySelector(".primary_numero");

const lis = document.querySelectorAll("li");

const telaInicial = document.querySelector(".fourty_section");
const btnStart = document.querySelector(".fourty_button");

const primary = document.querySelector(".primary");
window.onload = () => {
  primary.style.display = "none";
};

function iniciarQuiz() {
  telaInicial.style.display = "none";

  question.innerHTML = perguntas[0].questao;

  const perguntaAtual = perguntas[0];

  lis.forEach((item, index) => {
    item.textContent = perguntaAtual.opcoes[index];
  });

  numeropergunta.innerHTML = numeroquestoes[0].ordem;

  coracao.innerHTML = vidas[numerovidas].vida;
  primary.style.display = "flex";
}

btnStart.addEventListener("click", iniciarQuiz);
let valor = 0;
let numero = 0;

function valoratual() {
  valor++;
  numero++;
  verificarFim();
  if (valor >= perguntas.length) {
    return;
  }
  const perguntaatual = perguntas[valor];
  question.innerHTML = perguntas[valor].questao;

  lis.forEach((item, index) => {
    item.textContent = perguntaatual.opcoes[index];
    item.style.backgroundColor = "";
  });
  respondeu = false;
  botao.classList.remove("ativo");
  numeropergunta.innerHTML = numeroquestoes[numero].ordem;
  tempo.style.animation = "none";
  tempo.offsetHeight; // força reset
  tempo.style.animation = "tempo 15s linear forwards";
}

const numeroquestoes = [
  {
    ordem: "1/10",
  },
  {
    ordem: "2/10",
  },
  {
    ordem: "3/10",
  },
  {
    ordem: "4/10",
  },
  {
    ordem: "5/10",
  },
  {
    ordem: "6/10",
  },
  {
    ordem: "7/10",
  },
  {
    ordem: "8/10",
  },
  {
    ordem: "9/10",
  },
  {
    ordem: "10/10",
  },
];

let respondeu = false;

lis.forEach((item, index) => {
  item.onclick = () => {
    if (respondeu) {
      return;
    }
    respondeu = true;
    verificarresposta(index, item);
  };
});

const botao = document.querySelector(".primary_botao");
botao.addEventListener("click", valoratual);

const timer = document.querySelector(".primary_timer");
tempo.addEventListener("animationend", () => {
  const corretaIndex = perguntas[valor].correta;
  const lis = document.querySelectorAll("li");

  lis[corretaIndex].style.backgroundColor = "green";
  botao.classList.add("ativo");
  timer.classList.add("ativo");
  chances();
});

function verificarresposta(indexclicado, elemento) {
  const correta = perguntas[valor].correta;
  if (indexclicado === correta) {
    elemento.style.backgroundColor = "green";
    botao.classList.add("ativo");
    tempo.style.animationPlayState = "paused";
  } else {
    elemento.style.backgroundColor = "red";
    lis[correta].style.backgroundColor = "green";
    botao.classList.add("ativo");
    tempo.style.animationPlayState = "paused";
    chances();
  }
}

const perguntas = [
  {
    questao: "Quanto é 7 × 8?",
    opcoes: ["A) 54", "B) 56", "C) 48", "D) 64"],
    correta: 1,
  },

  {
    questao: 'Qual é o plural de "cão"?',
    opcoes: ["A) Cãos", "B) Cães", "C) Cãoses", "D) Cãons"],
    correta: 1,
  },

  {
    questao: "Qual planeta é conhecido como o planeta vermelho?",
    opcoes: ["A) Terra", "B) Marte", "C) Júpiter", "D) Saturno"],
    correta: 1,
  },

  {
    questao: "Quem descobriu o Brasil?",
    opcoes: [
      "A) Dom Pedro I",
      "B) Pedro Álvares Cabral",
      "C) Tiradentes",
      "D) Cristóvão Colombo",
    ],
    correta: 1,
  },

  {
    questao: "Qual é o maior oceano do mundo?",
    opcoes: ["A) Atlântico", "B) Índico", "C) Pacífico", "D) Ártico"],
    correta: 2,
  },

  {
    questao: "Qual é o resultado de 25 + 37?",
    opcoes: ["A) 62", "B) 52", "C) 63", "D) 60"],
    correta: 0,
  },

  {
    questao: "Qual dessas palavras está escrita corretamente?",
    opcoes: ["A) Exceção", "B) Excessão", "C) Exeção", "D) Esseção"],
    correta: 0,
  },

  {
    questao: "Qual desses é um mamífero?",
    opcoes: ["A) Cobra", "B) Galinha", "C) Baleia", "D) Peixe"],
    correta: 2,
  },

  {
    questao: "O que o HTML cria em um site?",
    opcoes: ["A) Estilo", "B) Estrutura", "C) Animação", "D) Banco de dados"],
    correta: 1,
  },

  {
    questao: "Quanto é 100 ÷ 4?",
    opcoes: ["A) 20", "B) 30", "C) 25", "D) 40"],
    correta: 2,
  },
];

const vidas = [
  {
    vida: "5",
  },
  {
    vida: "4",
  },
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

const gameover = document.querySelector(".second");
const coracao = document.querySelector(".primary_estrela a");
let numerovidas = 0;
function chances() {
  numerovidas++;
  const elemento = +vidas[numerovidas].vida;
  coracao.innerHTML = elemento;
  if (elemento === 0) {
    gameover.style.display = "flex";
    botao.classList.remove("ativo");
  }
}

const reiniciar = document.querySelector(".second_botao");
reiniciar.addEventListener("click", recarregar);
function recarregar() {
  location.reload();
}

const third = document.querySelector(".third");
function verificarFim() {
  const third = document.querySelector(".third");

  if (valor >= perguntas.length) {
    third.style.display = "flex";
  }
}

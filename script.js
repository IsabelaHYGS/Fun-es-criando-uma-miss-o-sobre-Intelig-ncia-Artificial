import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from ‘./perguntas.js;

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const opcao of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = opcao.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(opcao));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = Array.isArray(opcaoSelecionada.afirmacao)
    ? aleatorio(opcaoSelecionada.afirmacao)
    : opcaoSelecionada.afirmacao;

  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = `Em 2049, ${nome}`;
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
  atual = 0;
  historiaFinal = "";
  caixaResultado.classList.remove("mostrar");
  mostraPergunta();
}

function substituiNome() {
  for (const pergunta of perguntas) {
    pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
  }
}

substituiNome();
mostraPergunta();

botaoJogarNovamente.addEventListener("click", jogaNovamente);

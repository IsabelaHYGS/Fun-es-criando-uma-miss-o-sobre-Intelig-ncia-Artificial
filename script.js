import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);
botaoJogarNovamente.addEventListener("click", jogaNovamente);

function iniciaJogo() {
  atual = 0;
  historiaFinal = "";
  telaInicial.style.display = 'none';
  caixaPerguntas.style.display = 'block';
  caixaAlternativas.style.display = 'block';
  caixaResultado.classList.remove("mostrar");
  mostraPergunta();
}

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
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao); 
  historiaFinal += afirmacoes + " "; 

  if (opcaoSelecionada.proxima !== undefined) { 
    atual = opcaoSelecionada.proxima; 
  } else { 
    mostraResultado(); 
    return; 
  } 
  mostraPergunta(); 
} 

function mostraResultado() {
  caixaPerguntas.style.display = 'none';
  caixaAlternativas.style.display = 'none';
  textoResultado.textContent = `Em 2049, ${nome} ${historiaFinal}`;
  caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
  atual = 0;
  historiaFinal = "";
  caixaResultado.classList.remove("mostrar");
  telaInicial.style.display = 'block';
}

function substituiNome() {
  for (const pergunta of perguntas) {
    pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
  }
}

substituiNome();

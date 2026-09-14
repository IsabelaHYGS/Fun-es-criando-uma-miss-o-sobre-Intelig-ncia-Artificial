const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

    
        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
      },
      {
        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao: "Explorou ferramentas gerativas visuais para expressar suas ideias."
      }
    ],
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      {
        texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao: "Achou aceitável confiar integralmente no resultado fornecido."
      },
      {
        texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final."
      }
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    exibeResultado();
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
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}

function exibeResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  caixaAlternativas.textContent = "";
  textoResultado.textContent = historiaFinal;
}
function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

mostraPergunta();

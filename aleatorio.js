const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];

function aleatorio(lista) {
  const posicao = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}

const nome = aleatorio(nomes);

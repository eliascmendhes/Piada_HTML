// Array com as piadas
const jokes = [
  "O que o frango disse quando atravessou a rua? Galinha crossing.",
  "Por que o coelho levou um relógio para a festa? Porque ele queria ficar à toa.",
  "Por que o elefante usa sapatos grandes? Porque seus pés são grandes.",
  // Adicione mais piadas aqui
];

// Seleciona o elemento do botão
const button = document.querySelector("#button");

// Adiciona um evento de clique no botão
button.addEventListener("click", () => {
  // Seleciona o elemento da piada
  const jokeElement = document.querySelector("#joke");

  // Gera um número aleatório entre 0 e o tamanho do array de piadas
  const index = Math.floor(Math.random() * jokes.length);
  jokeElement.textContent = jokes[index];
});
// Carrega uma piada aleatória quando a página é carregada
window.onload = () => {
  button.click();
};

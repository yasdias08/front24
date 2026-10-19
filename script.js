const botaoAnimar = document.getElementById("botaoAnimar");
const bolinha = document.getElementById("bolinha");

const botaoAtivo = document.getElementById("botaoAtivo");
const painelInterativo = document.getElementById("painelInterativo");

const botaoTema = document.getElementById("botaoTema");

// Reproduzir a animação com @keyframes
botaoAnimar.addEventListener("click", function () {
  bolinha.classList.remove("animando");

  // Permite executar a animação novamente
  void bolinha.offsetWidth;

  bolinha.classList.add("animando");
});

// Ativar e desativar o efeito usando classList.toggle()
botaoAtivo.addEventListener("click", function () {
  const estaAtivo = painelInterativo.classList.toggle("ativo");

  botaoAtivo.textContent = estaAtivo
    ? "Desativar efeito"
    : "Ativar / desativar efeito";
});

// Alternar entre tema claro e escuro
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  const temaEscuro = document.body.classList.contains("escuro");

  botaoTema.textContent = temaEscuro
    ? "☀ Claro"
    : "☾ Escuro";
});
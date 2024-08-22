const transicaoPagina = document.getElementById('container')
const botaoTransicao = document.getElementById('botaoTransicao')

window.onload = function () {
  transicaoPagina.classList.add("aparecer")
}

botaoTransicao.addEventListener("click", function (event) {
  event.preventDefault();

  transicaoPagina.classList.remove("aparecer")
  transicaoPagina.classList.add("mover")

  setTimeout(() => {
    window.location.href = './pages/cards.html';
  }, 1000)
})
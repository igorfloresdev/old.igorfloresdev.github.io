// Efeito de TipeWrite

function typeWrite(elemento) {
  const textoArray = elemento.innerText.split("");
  elemento.innerText = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerText += letra;
    }, 75 * i);
  });
}
const titulo = document.querySelector(".header-titulo h2");
typeWrite(titulo);

//Menu mobile

const botao_menu = document.querySelector(".menu-mobile");
const botao_fechar = document.querySelector(".fechar-mobile");
const menu_mobile = document.querySelector(".header-menu ul");

var tamanho_tela = window.innerWidth;

window.addEventListener("resize", function () {
  tamanho_tela = window.innerWidth;

  if (tamanho_tela > 800) {
    menu_mobile.style.display = "flex";
  } else {
    menu_mobile.style.display = "none";
  }
});

if (tamanho_tela <= 800) {
  botao_menu.onclick = function () {
    menu_mobile.style.display = "grid";
    botao_fechar.style.display = "initial";
  };

  botao_fechar.onclick = function () {
    menu_mobile.style.display = "none";
    botao_fechar.style.display = "none";
  };
}

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

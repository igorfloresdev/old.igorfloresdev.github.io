//Menu mobile
const botao_menu = document.querySelector(".menu-mobile");
const botao_fechar = document.querySelector(".fechar-mobile");
const menu_item = document.querySelectorAll(".header-menu ul li a");

botao_menu.addEventListener("click", function () {
  const menu = document.querySelector(".header-menu ul");
  menu.classList.toggle("mostrar");
});

botao_fechar.addEventListener("click", function () {
  const menu = document.querySelector(".header-menu ul");
  menu.classList.remove("mostrar");
});

const menu_itens = Array.from(menu_item);

for (let i = 0; i < menu_item.length; i++) {
  menu_itens[i].addEventListener("click", function () {
    const menu = document.querySelector(".header-menu ul");
    menu.classList.remove("mostrar");
  });
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

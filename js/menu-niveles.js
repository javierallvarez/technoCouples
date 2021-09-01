function escribeNiveles() {
  let menuNiveles = document.querySelector(".selecciona-nivel ul");
  niveles.forEach(function(elemento, indice) {
    var controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivel' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    menuNiveles.appendChild(controlNivel);
  });
}

//Recoge el dataset de nivel (todos los data-nivel del html que se muestran solo en el inspector del navegador)
//Esta función recoge el valor de nivel, pero es un valor textual y necesitamos un valor numérico. ParseInt traduce el valor textual a numérico.
function cambiaNivel() {
  let nivel = parseInt(this.dataset.nivel);
  nivelActual = nivel;
  actualizaNivel();
  iniciar();
}

function muestraMenuNiveles(evento) {
  evento.stopPropagation();
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

function ocultaMenuNiveles() {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".selecciona-nivel")) {
    return;
  }
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function teclaEscCierraMenu(evento) {
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}

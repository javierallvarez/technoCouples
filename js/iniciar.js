 // En este archivo muevo el código que arranca el programa:

function iniciar() {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);

  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });

  // Se puede poner así if (modoRelax === false){ o así (el simbolo ! significa negación):
  if (!modoRelax){
    iniciaCronometro();
  } else {
  document.querySelector("#cronometro").classList.add("cronometro-oculto")
  }

}

//Esta función sirve para que el botón Reiniciar nos devuelva al nivel 0 y no al actual, como estaba pasando.
function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal() {
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
}


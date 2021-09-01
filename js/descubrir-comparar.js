function descubrir() {
    let descubiertas;
    let tarjetasPendientes;
    let totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  
  
    if (totalDescubiertas.length > 1) {
      return;
    }
  
    this.classList.add("descubierta");

    //Incluimos cloneNode porque al pulsar dos veces seguidas en una carta solo suena una vez, de esta manera al pulsar en la segunda carta, interrumpe la reproducción y comienza una nueva.
    // document.querySelector("#sonido-carta").cloneNode().play();
    document.querySelector("#sonido-carta").play();
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (descubiertas.length < 2) {
      return;
    }
  
    comparar(descubiertas);
    actualizaContador();
    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (tarjetasPendientes.length === 0) {
      setTimeout(finalizar, 1000);
    }
  }
  
  function comparar(tarjetasAComparar){
    if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
      acierto(tarjetasAComparar);
    } else {
      error(tarjetasAComparar);
    }
  }
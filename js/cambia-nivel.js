function subeNivel() {
        nivelActual = nivelActual + 1;
        //o nivelActual++;

}

function actualizaNivel() {
    //Al usuario le indicamos que está en el nivel 1, en realidad corresponde a nuestro nivel 0:
    let nivelTexto = nivelActual + 1;
    if (nivelTexto < 10) {
        nivelTexto = "0" + nivelTexto;
    }
    //En el if indicamos que si el Nivel es menor al nº 10, le añadimos un "0" textual, en string.

    document.querySelector("#nivel").innerText = nivelTexto;
}

function cargaNuevoNivel() {
    subeNivel();
    actualizaNivel();
    iniciar();
}
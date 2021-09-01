function actualizaContador() {
    let movimientosTexto;
    //Con esto asignamos un +1 a cada movimiento:
    movimientos = movimientos + 1;
    movimientosTexto = movimientos;

    //Si el nº de movimientos es superior a los mov maximos del nivel actual y no estamos en modo Relax, lanza el gameOver y deja de procesar.
    //Si dentro de un condicional queremos poner 2 cosas a evaluar y que sean TRUE, ponemos &&. !modoRelax significa que es igual a FALSE.
    //Si en lugar de un AND (&&) queremos poner un OR, usamos || solo una de las dos condiciones tendría que ser válida para ejecutar. 
    if (movimientos > niveles[nivelActual].movimientosMax && !modoRelax) {
        gameOver();
        return;
    }

    //Si es inferior a 10 añadir un "0", en string.
    if (movimientos < 10) {
        movimientosTexto = "0" + movimientos;

    }
    document.querySelector("#mov").innerText = movimientosTexto;

}

function maxContador(){
    let movimientosMaxTexto = niveles[nivelActual].movimientosMax;
    if (movimientosMaxTexto < 10) {
        movimientosMaxTexto = "0" + movimientosMaxTexto;

    }

    document.querySelector("#mov-total").innerText = movimientosMaxTexto;
}
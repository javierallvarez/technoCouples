// Primero un cronómetro, a continuación una cuenta atrás:

// function iniciaCronometro() {
//   let segundos = 0;
//   let minutos = 0;
//   let segundosTexto;
//   let minutosTexto;

//   function actualizaContador() {
//     segundos = segundos + 1;
    
//     //o dicho de manera más breve, valdría también:
//     //segundos++;

//     if (segundos > 59){
//       segundos = 00;
//       minutos = minutos + 1;
//     }

//     //Hemos perdido el doble 0, añadimos un 0 literal en string "0" + el cronometro:
//     segundosTexto = segundos;
//     minutosTexto = minutos;
//     if (segundos < 10) {
//       segundosTexto = "0" + segundos;
//     }
    
//     if (minutos < 10) {
//       minutosTexto = "0" + minutos;
//     }

  
//     document.querySelector("#minutos").innerText = minutosTexto;
//     document.querySelector("#segundos").innerText = segundosTexto;

// }

// //Admite 2 argumentos: La función que va a hacer y el intervalo de tiempo en milisegundos.
// setInterval(actualizaContador, 1000);
// }

//--------------------Cuenta atrás-----------------

function iniciaCronometro() {
  let segundos = 30;
  let minutos = 0;
  let segundosTexto;
  let minutosTexto;
  // let cronometro;

  function actualizaContador() {
    segundos = segundos - 1;
    //o dicho de manera más breve, valdría también:
    //segundos--;
    if (segundos < 0){
      segundos = 59;
      minutos = minutos - 1;
    }

    //Para parar la cuenta atrás:
    if (minutos < 0){
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }

    //Hemos perdido el doble 0, añadimos un 0 literal en string "0" + el cronometro:
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }

    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
}

//Admite 2 argumentos: La función que va a hacer y el intervalo de tiempo en milisegundos.
cronometro = setInterval(actualizaContador, 1000);
}

//Completa en el span del html el tiempo en el que se inicia el crono o la cuenta atrás, por ejemplo, la cuenta atrás comienza desde 00:10.
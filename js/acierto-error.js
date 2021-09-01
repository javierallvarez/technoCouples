
function acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento)
    {
      elemento.classList.add("acertada");
    })
    document.querySelector("#sonido-acierto").play();
  }
  
  function error(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
      elemento.classList.add("error");
    });

    document.querySelector("#sonido-error").play();
    
    // setTimeout nos permite nos permite establecer una cuenta atrás hasta que se ejecuta la función. Primero se especifica la función a realizar y después e tiempo en milisegundos:
    setTimeout(function(){
        lasTarjetas.forEach(function(elemento){
        elemento.classList.remove("descubierta");
        elemento.classList.remove("error");
        });
        }, 1000);

    
  }

  
  
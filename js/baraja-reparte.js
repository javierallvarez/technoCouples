function barajaTarjetas(lasTarjetas) {
    let resultado;
    let totalTarjetas = lasTarjetas.concat(lasTarjetas);
    resultado = totalTarjetas.sort(function() {
      return 0.5 - Math.random();
    }
    );
    return(resultado);
  }
  

  // var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
  
  
  function reparteTarjetas(lasTarjetas) {
    let mesa = document.querySelector("#mesa");
    let tarjetasBarajadas = barajaTarjetas(lasTarjetas);
    mesa.innerHTML = "";
  
    tarjetasBarajadas.forEach(function(elemento) {
      let tarjeta = document.createElement("div");
  
      tarjeta.innerHTML =
        "<div class='tarjeta' data-valor= " +
        elemento +
        ">" +
        "<img style='width: 100%' src ='"+ elemento +"' class='tarjeta__contenido'></div>";
  
      mesa.appendChild(tarjeta);
  
    });
  }

  // reparteTarjetas();
  // Las putas tarjetas giran!                               
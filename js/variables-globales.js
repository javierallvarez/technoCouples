let modoRelax = false;
let movimientos = 0;
let cronometro;
let grupoTarjetas = 
  
    [["https://i1.sndcdn.com/artworks-000325257504-i4xd7y-t500x500.jpg", "https://i1.sndcdn.com/artworks-000591410435-jvez3m-t500x500.jpg"],
    
    
    ["https://i1.sndcdn.com/artworks-000392940969-i6g7m5-t500x500.jpg", "https://i1.sndcdn.com/artworks-000214918139-qoi6m3-t500x500.jpg"],

    
    ["https://i1.sndcdn.com/artworks-000311412141-g1jx3g-t500x500.jpg", "https://i1.sndcdn.com/artworks-000509511297-ahvk8l-t500x500.jpg", "https://i1.sndcdn.com/artworks-000584670971-cd15o4-t500x500.jpg", "https://i1.sndcdn.com/artworks-000371173353-hcnmtu-t500x500.jpg"],

  
    ["https://i1.sndcdn.com/artworks-9xqQBSR60zyyUBrB-Emf4rA-t500x500.jpg", "https://i1.sndcdn.com/artworks-9vEuhyDEQccmvkPv-Z0RTGQ-t240x240.jpg", "https://i1.sndcdn.com/artworks-000666937165-131xp0-t500x500.jpg", "https://i1.sndcdn.com/artworks-W5fSONklOzAOzzCt-vKWxcg-t500x500.jpg"],

    
    ["https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D3266803830017230&imgrefurl=https%3A%2F%2Fm.facebook.com%2Fernestoh83%2Fphotos%2Fa.1108430235854611%2F3266803830017230%2F%3Ftype%3D3&tbnid=l0huuabRYU4_bM&vet=12ahUKEwjsyKC4-NvyAhUHNRoKHdrpBtEQMygFegQIARBD..i&docid=VIGWdO-xczFfdM&w=800&h=800&itg=1&q=musica%20cavernicola%20radio&hl=es&ved=2ahUKEwjsyKC4-NvyAhUHNRoKHdrpBtEQMygFegQIARBD", "https://i1.sndcdn.com/artworks-p0uA3AOgImuD7O8J-LI302A-t500x500.jpg", "https://i1.sndcdn.com/artworks-CCbu8NaBihXSyOmB-4K8nzQ-t500x500.jpg", "https://i1.sndcdn.com/artworks-yK3rZCyF434rt0Xk-RbiLwA-t500x500.jpg"]];

let nivelActual = 0;

//En el primer nivel aparecen las cartas del primer Array, en el segundo nivel el primer array + el segundo; en el tercer nivel los 3 arrays...
let niveles = [
    {
        tarjetas: grupoTarjetas[0],
        movimientosMax: 3
    },
    {
        tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
        movimientosMax: 8
    },
    {
        tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
        movimientosMax: 12
    },
    {
        tarjetas: grupoTarjetas[0].concat(
          grupoTarjetas[1],
          grupoTarjetas[2],
          grupoTarjetas[3]
        ),
        movimientosMax: 25
    },
    {
      tarjetas: grupoTarjetas[0].concat(
        grupoTarjetas[1],
        grupoTarjetas[2],
        grupoTarjetas[3],
        grupoTarjetas[4]
      ),
      movimientosMax: 60
    }
];










// var grupoTarjetas2 = ["👹", "🍦", "👾", "👽", "👺", "🌈", "🤖"];

// var grupoTarjetas3 = ["👽", "🌈", "🤖", "👺", "👹", "🍦", "👾"];

// var totalTarjetas = grupoTarjetas.concat(grupoTarjetas2, grupoTarjetas3);

// var nuevoTotalTarjetas = totalTarjetas.push("test");

// var arrayAnidado = [ 
//   ["👽", "🌈", "🤖", "👺", "👹", "🍦", "👾"],
//   ["👹", "🍦", "👾", "👽", "👺", "🌈", "🤖"],
//   ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"]
// ];

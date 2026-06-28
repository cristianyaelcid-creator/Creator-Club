const API_URL = "https://script.google.com/macros/s/AKfycbxnNeaSjbg9xEj07OZbhwvWPOJYu38cCJFhdpKm_OdTaeVSSnTicp-qRCAScBXE3_zhXw/exec";

fetch(API_URL)
  .then(response => response.json())
  .then(datos => {

    // Tomamos el primer cliente (Jesús)
   const parametros = new URLSearchParams(window.location.search);

const id = parseInt(parametros.get("id")) || 1;
alert("ID recibido: " + id);
// Quitamos la primera fila (encabezados)
const clientes = datos.slice(1);

// Buscamos el cliente por ID
const cliente = clientes.find(fila => Number(fila[0]) === id);

    document.getElementById("nombre").textContent = cliente[1];

    document.getElementById("puntos").textContent =
      cliente[2] + " punto(s)";

    document.getElementById("compras").textContent =
      cliente[3] + " de 10 compras";

    const faltan = 10 - cliente[3];

    document.getElementById("recompensa").textContent =
      "🎁 Te faltan " + faltan + " compras";

    document.getElementById("barra").style.width =
      (cliente[3] * 10) + "%";

  })
  .catch(error => {
    console.error(error);
  });

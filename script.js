const API_URL = "https://script.google.com/macros/s/AKfycbxnNeaSjbg9xEj07OZbhwvWPOJYu38cCJFhdpKm_OdTaeVSSnTicp-qRCAScBXE3_zhXw/exec";

fetch(API_URL)
  .then(response => response.json())
  .then(datos => {

    // Tomamos el primer cliente (Jesús)
   const parametros = new URLSearchParams(window.location.search);

const id = parseInt(parametros.get("id")) || 1;

// Quitamos la primera fila (encabezados)
const clientes = datos.clientes.slice(1);

const misiones = datos.misiones.slice(1);

// Buscar la misión que esté activa
const misionActiva = misiones.find(
  m => String(m[1]).trim().toLowerCase() === "sí"
);

console.log(misionActiva);

const meta = Number(misionActiva[2]);
const recompensa = Number(misionActiva[3]);
    
// Buscamos el cliente por ID
const cliente = clientes.find(fila => Number(fila[0]) === id);

    document.getElementById("nombre").textContent = cliente[1];
document.getElementById("memberId").textContent =
"Miembro #" + String(cliente[0]).padStart(4,"0");
    
    document.getElementById("fecha").textContent =
"📅 Miembro desde: " + cliente[5];
    
    document.getElementById("puntos").textContent =
      cliente[2] + " punto(s)";

    document.getElementById("compras").textContent =
      cliente[3] + " de 10 compras";
    
document.getElementById("saldo").textContent =
"$" + cliente[6] + " MXN";
    
 document.getElementById("objetivo").textContent =
cliente[9] + " / " + cliente[10];
    
  document.getElementById("goalFill").style.width =
(cliente[9] / cliente[10] * 100) + "%";
    
    document.getElementById("goalReward").textContent =
"🎁 Recompensa: +$" + recompensa + " de Saldo Aura";
    
    const faltan = cliente[10] - cliente[9];
let nivel = "🥉 Bronce";

if(cliente[3] >= 10){
    nivel = "💎 Diamante";
}else if(cliente[3] >= 8){
    nivel = "🥇 Oro";
}else if(cliente[3] >= 5){
    nivel = "🥈 Plata";
}

document.getElementById("nivel").textContent =
"Nivel: " + nivel;
  const tarjeta = document.querySelector(".card");

tarjeta.classList.remove("bronce","plata","oro","diamante");

if (cliente[9] >= cliente[10]) {
  
    tarjeta.classList.add("diamante");

}else if(cliente[3] >= 8){

    tarjeta.classList.add("oro");

}else if(cliente[3] >= 5){

    tarjeta.classList.add("plata");

}else{

    tarjeta.classList.add("bronce");

}  
    
if (cliente[3] >= meta) {

    document.getElementById("recompensa").innerHTML =
    "🎉 <b>¡Recompensa desbloqueada!</b><br>Ya puedes reclamar tu beneficio.";

} else {

    document.getElementById("recompensa").textContent =
    "🎁 Te faltan " + faltan + " compras";

}
    
    document.getElementById("barra").style.width =
(cliente[9] / cliente[10] * 100) + "%";
    
document.getElementById("progresoTexto").textContent =
Math.round((cliente[9] / cliente[10]) * 100) + "% completado";
    
  })
  .catch(error => {
    console.error(error);
  });

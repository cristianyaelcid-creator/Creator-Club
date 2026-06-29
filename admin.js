const API_URL = "TU_URL_DE_APPS_SCRIPT";

fetch(API_URL)
.then(r=>r.json())
.then(datos=>{

const clientes = datos.slice(1);

let html = "";

clientes.forEach(cliente=>{

html += `
<div style="border:1px solid #ddd;padding:15px;border-radius:15px;margin-bottom:15px;">

<h3>${cliente[1]}</h3>

<p>Compras: ${cliente[3]}</p>

</div>
`;

});

document.getElementById("clientes").innerHTML = html;

});

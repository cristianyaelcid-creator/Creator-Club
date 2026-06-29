const API_URL = "https://script.google.com/macros/s/AKfycbxnNeaSjbg9xEj07OZbhwvWPOJYu38cCJFhdpKm_OdTaeVSSnTicp-qRCAScBXE3_zhXw/exec";

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

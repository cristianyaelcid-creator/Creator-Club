const API_URL = "https://script.google.com/macros/s/AKfycbxnNeaSjbg9xEj07OZbhwvWPOJYu38cCJFhdpKm_OdTaeVSSnTicp-qRCAScBXE3_zhXw/exec";

fetch(API_URL)
.then(r => r.json())
.then(datos => {

    const clientes = datos.slice(1);

    let html = "";

    clientes.forEach(cliente => {

        const porcentaje = cliente[3] * 10;

        html += `
        <div class="cliente-card">

            <h2>${cliente[1]}</h2>

            <p><strong>Compras:</strong> ${cliente[3]}/10</p>

            <div class="progress">
                <div class="bar" style="width:${porcentaje}%"></div>
            </div>

            <div class="botones">
               <button onclick="probarPost()">➕</button>
            </div>

        </div>
        `;
    });

    document.getElementById("clientes").innerHTML = html;

});
function probarPost(){

fetch(API_URL,{
method:"POST"
})
.then(r=>r.text())
.then(res=>alert(res));

}

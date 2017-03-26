
$(document).ready(function(){
    $("#accionesImportantes").click(function(){
        cargarJugadas();
    });
});

function cargarJugadas(){
    var text = '{"principalesAcciones":[{"minuto":"10","accion":"Remate a marco"},{"minuto":"30","accion":"Tarjeta Roja"}]}';
    var json   = JSON.parse(text);
    var html = "<table class='table table-hover'>";
    html += "<thead><tr><td>Minuto</td><td>Accion</td></tr><thead>";
    for(var i=0;i<json.principalesAcciones.length;i++){
        html +="<tr>";
        html+= "<td>"+json.principalesAcciones[i].minuto+"</td>";
        html+= "<td>"+json.principalesAcciones[i].accion+"</td>";
        html += "</tr>";
    }
    html += "</table>";
    $("#mainRow").html(html);
}

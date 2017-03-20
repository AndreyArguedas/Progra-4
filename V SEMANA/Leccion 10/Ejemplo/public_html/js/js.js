
///************************************************************
//Cuando la pagina esta lista se agregan los eventos con 
//JQUERY
//************************************************************

$(document).ready(function(){
    $("#cargarJson").click(function(){
        //cargarJson();
        //cargarJsonTabla();
        cargarJsonB();
    });
});

//************************************************************
//Funcion para cargar el JSON
//************************************************************

function cargarJson(){
    
    var text = '{"listaEmpleados":{"empleado":[{"seq":1,"id":7293,"primerapellido":"AgÃ¼ero","segundoapellido":"Fonseca","nombre":"Daniel"},{"seq":2,"id":9896,"primerapellido":"Aguilar","segundoapellido":"AcuÃ±a","nombre":"RubÃ©n"},{"seq":3,"id":3969,"primerapellido":"Azofeifa","segundoapellido":"Galvez","nombre":"Humberto"},{"seq":4,"id":1469,"primerapellido":"Cambronero","segundoapellido":"Corrales","nombre":"Marjorie"},{"seq":5,"id":4601,"primerapellido":"Carrillo","segundoapellido":"Medina","nombre":"Alonso"},{"seq":6,"id":3241,"primerapellido":"Charpentier","segundoapellido":"CÃ³rdoba","nombre":"Carlos"},{"seq":7,"id":9756,"primerapellido":"ChavarrÃ­a","segundoapellido":"MÃ©ndez","nombre":"Marco"},{"seq":8,"id":1836,"primerapellido":"Cordero","segundoapellido":"Montero","nombre":"Daniel"},{"seq":9,"id":6948,"primerapellido":"Dalorzo","segundoapellido":"Fuentes","nombre":"Ronald"},{"seq":10,"id":3082,"primerapellido":"GÃ³mez","segundoapellido":"PÃ©rez","nombre":"Daniela"},{"seq":11,"id":3984,"primerapellido":"HernÃ¡ndez","segundoapellido":"CortÃ©s","nombre":"Luis"},{"seq":12,"id":8146,"primerapellido":"Hidalgo","segundoapellido":"GarcÃ­a","nombre":"Diego"},{"seq":13,"id":4448,"primerapellido":"Lugo","segundoapellido":"Murillo","nombre":"Emilio"},{"seq":14,"id":7743,"primerapellido":"MartÃ­nez","segundoapellido":"Lizano","nombre":"Miguel"},{"seq":15,"id":1089,"primerapellido":"Parra","segundoapellido":"Hidalgo","nombre":"Francisco"},{"seq":16,"id":2043,"primerapellido":"Porras","segundoapellido":"Espinoza","nombre":"Mario"},{"seq":17,"id":7058,"primerapellido":"Sancho","segundoapellido":"SÃ¡nchez","nombre":"MarÃ­a"},{"seq":18,"id":2719,"primerapellido":"Sandoval","segundoapellido":"Aguilar","nombre":"Natalia"},{"seq":19,"id":2644,"primerapellido":"Valerio","segundoapellido":"GonzÃ¡lez","nombre":"Ana LucÃ­a"},{"seq":20,"id":3589,"primerapellido":"Valverde","segundoapellido":"Villalobos","nombre":"AarÃ³n"}]}}';
    json   = JSON.parse(text);
    var html = "<ul>";
    for(var i=0;i<json.listaEmpleados.empleado.length;i++){
        html+= "<li>"+json.listaEmpleados.empleado[i].nombre+"</li>";
    }
    html += "</ul>";
    $("#resultadoConsulta").html(html);
        
}

function cargarJsonTabla(){
    var text = '{"listaEmpleados":{"empleado":[{"seq":1,"id":7293,"primerapellido":"AgÃ¼ero","segundoapellido":"Fonseca","nombre":"Daniel"},{"seq":2,"id":9896,"primerapellido":"Aguilar","segundoapellido":"AcuÃ±a","nombre":"RubÃ©n"},{"seq":3,"id":3969,"primerapellido":"Azofeifa","segundoapellido":"Galvez","nombre":"Humberto"},{"seq":4,"id":1469,"primerapellido":"Cambronero","segundoapellido":"Corrales","nombre":"Marjorie"},{"seq":5,"id":4601,"primerapellido":"Carrillo","segundoapellido":"Medina","nombre":"Alonso"},{"seq":6,"id":3241,"primerapellido":"Charpentier","segundoapellido":"CÃ³rdoba","nombre":"Carlos"},{"seq":7,"id":9756,"primerapellido":"ChavarrÃ­a","segundoapellido":"MÃ©ndez","nombre":"Marco"},{"seq":8,"id":1836,"primerapellido":"Cordero","segundoapellido":"Montero","nombre":"Daniel"},{"seq":9,"id":6948,"primerapellido":"Dalorzo","segundoapellido":"Fuentes","nombre":"Ronald"},{"seq":10,"id":3082,"primerapellido":"GÃ³mez","segundoapellido":"PÃ©rez","nombre":"Daniela"},{"seq":11,"id":3984,"primerapellido":"HernÃ¡ndez","segundoapellido":"CortÃ©s","nombre":"Luis"},{"seq":12,"id":8146,"primerapellido":"Hidalgo","segundoapellido":"GarcÃ­a","nombre":"Diego"},{"seq":13,"id":4448,"primerapellido":"Lugo","segundoapellido":"Murillo","nombre":"Emilio"},{"seq":14,"id":7743,"primerapellido":"MartÃ­nez","segundoapellido":"Lizano","nombre":"Miguel"},{"seq":15,"id":1089,"primerapellido":"Parra","segundoapellido":"Hidalgo","nombre":"Francisco"},{"seq":16,"id":2043,"primerapellido":"Porras","segundoapellido":"Espinoza","nombre":"Mario"},{"seq":17,"id":7058,"primerapellido":"Sancho","segundoapellido":"SÃ¡nchez","nombre":"MarÃ­a"},{"seq":18,"id":2719,"primerapellido":"Sandoval","segundoapellido":"Aguilar","nombre":"Natalia"},{"seq":19,"id":2644,"primerapellido":"Valerio","segundoapellido":"GonzÃ¡lez","nombre":"Ana LucÃ­a"},{"seq":20,"id":3589,"primerapellido":"Valverde","segundoapellido":"Villalobos","nombre":"AarÃ³n"}]}}';
    json   = JSON.parse(text);
    var html = "<table border='1'>";
    html += "<tr><td>SEQ</td><td>ID</td><td>PRIMERAPELLIDO</td><td>SEGUNDOAPELLIDO</td><td>NOMBRE</td></tr>"
    for(var i=0;i<json.listaEmpleados.empleado.length;i++){
        html +="<tr>";
        html+= "<td>"+json.listaEmpleados.empleado[i].seq+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].id+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].primerapellido+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].segundoapellido+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].nombre+"</td>";
        html += "</tr>";
    }
    html += "</table>";
    $("#container").html(html);
}


function cargarJsonB(){
    var text = '{"listaEmpleados":{"empleado":[{"seq":1,"id":7293,"primerapellido":"AgÃ¼ero","segundoapellido":"Fonseca","nombre":"Daniel"},{"seq":2,"id":9896,"primerapellido":"Aguilar","segundoapellido":"AcuÃ±a","nombre":"RubÃ©n"},{"seq":3,"id":3969,"primerapellido":"Azofeifa","segundoapellido":"Galvez","nombre":"Humberto"},{"seq":4,"id":1469,"primerapellido":"Cambronero","segundoapellido":"Corrales","nombre":"Marjorie"},{"seq":5,"id":4601,"primerapellido":"Carrillo","segundoapellido":"Medina","nombre":"Alonso"},{"seq":6,"id":3241,"primerapellido":"Charpentier","segundoapellido":"CÃ³rdoba","nombre":"Carlos"},{"seq":7,"id":9756,"primerapellido":"ChavarrÃ­a","segundoapellido":"MÃ©ndez","nombre":"Marco"},{"seq":8,"id":1836,"primerapellido":"Cordero","segundoapellido":"Montero","nombre":"Daniel"},{"seq":9,"id":6948,"primerapellido":"Dalorzo","segundoapellido":"Fuentes","nombre":"Ronald"},{"seq":10,"id":3082,"primerapellido":"GÃ³mez","segundoapellido":"PÃ©rez","nombre":"Daniela"},{"seq":11,"id":3984,"primerapellido":"HernÃ¡ndez","segundoapellido":"CortÃ©s","nombre":"Luis"},{"seq":12,"id":8146,"primerapellido":"Hidalgo","segundoapellido":"GarcÃ­a","nombre":"Diego"},{"seq":13,"id":4448,"primerapellido":"Lugo","segundoapellido":"Murillo","nombre":"Emilio"},{"seq":14,"id":7743,"primerapellido":"MartÃ­nez","segundoapellido":"Lizano","nombre":"Miguel"},{"seq":15,"id":1089,"primerapellido":"Parra","segundoapellido":"Hidalgo","nombre":"Francisco"},{"seq":16,"id":2043,"primerapellido":"Porras","segundoapellido":"Espinoza","nombre":"Mario"},{"seq":17,"id":7058,"primerapellido":"Sancho","segundoapellido":"SÃ¡nchez","nombre":"MarÃ­a"},{"seq":18,"id":2719,"primerapellido":"Sandoval","segundoapellido":"Aguilar","nombre":"Natalia"},{"seq":19,"id":2644,"primerapellido":"Valerio","segundoapellido":"GonzÃ¡lez","nombre":"Ana LucÃ­a"},{"seq":20,"id":3589,"primerapellido":"Valverde","segundoapellido":"Villalobos","nombre":"AarÃ³n"}]}}';
    json   = JSON.parse(text);
    var html = "<table class='table table-hover'>";
    html += "<thead><tr><td>SEQ</td><td>ID</td><td>PRIMERAPELLIDO</td><td>SEGUNDOAPELLIDO</td><td>NOMBRE</td></tr><thead>"
    for(var i=0;i<json.listaEmpleados.empleado.length;i++){
        html +="<tr>";
        html+= "<td>"+json.listaEmpleados.empleado[i].seq+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].id+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].primerapellido+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].segundoapellido+"</td>";
        html+= "<td>"+json.listaEmpleados.empleado[i].nombre+"</td>";
        html += "</tr>";
    }
    html += "</table>";
    $("#containerB").html(html);
}

/* global Storage */

'use strict';

var trabajo;
var trabajos;

$(document).ready(function(){
    var formulario=document.getElementById("formTrabajo");
    formulario.addEventListener("submit",doValidate);
    trabajos = Storage.retrieve("trabajos");
    if (trabajos === null){
        trabajos=[];
        Storage.store("trabajos",trabajos);
    }
    listTrabajos(trabajos);
});

function doValidate(){
    var $codigo = $("#codigo");
    var $descripcion = $("#descripcion");
    var error = false;
    if($codigo.val().length === 0){
        error = true;
    }
    if($descripcion.val().length === 0){
        error = true;
    }    
    if (error){event.preventDefault();alert("Faltan campos de ingresar");} //cancela el envio de la informacion
}

function listTrabajos(trabajos){
    $("#trabajoBody").html("");
    for(var i = 0; i < trabajos.length; i++)
        listTrabajo(trabajos[i]);
}

function listTrabajo(trabajo){
    var tr = document.createElement("tr");
    var td;
    td=document.createElement("td");
    td.appendChild(document.createTextNode(trabajo.codigo));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(trabajo.descripcion));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(trabajo.prioridad));
    tr.appendChild(td);
    td = document.createElement("td");
    td.appendChild(document.createTextNode("ARIBA"));
    td.addEventListener("click", () => aumentarPrioridad(trabajo));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode("ABAJO"));
    td.addEventListener("click", () => disminuirPrioridad(trabajo));
    tr.appendChild(td);
    cambiarColorFila(tr,trabajo.prioridad);
    $("#trabajoBody").append(tr); 
}

function cambiarColorFila(tr,priori){
    tr.className = priori;
}

function aumentarPrioridad(trabajo){
    switch(trabajo.prioridad){
        case "Baja": 
            trabajo.prioridad = "Media";
            break;
        case "Media": 
            trabajo.prioridad = "Alta";
            break;
        case "Alta": 
            trabajo.prioridad = "Urgente";
            break;
    }
    Storage.store("trabajos",trabajos);
    listTrabajos(trabajos);
}

function disminuirPrioridad(trabajo){
    switch(trabajo.prioridad){
        case "Media": 
            trabajo.prioridad = "Baja";
            break;
        case "Alta": 
            trabajo.prioridad = "Media";
            break;
        case "Urgente": 
            trabajo.prioridad = "Alta";
            break;
    }
    Storage.store("trabajos",trabajos);
    listTrabajos(trabajos);
}

function doSubmit(){
    var $codigo = $("#codigo");
    var $descripcion = $("#descripcion");
    var $prioridad = $("#prioridad");
    trabajo = new Trabajo($codigo.val(),$descripcion.val(),$prioridad.val());
    if(!find(trabajo.codigo)){
        trabajos.push(trabajo);
        Storage.store("trabajos", trabajos);
        listTrabajo(trabajo);
        
        window.alert("Data sent: " + trabajo.completo("-"));
        var $formulario = $("#formTrabajo");
        $formulario[0].reset();
        	
    }
    else
        alert("No se puede ingresar este trabajo, ya ha sido registrado");
}

function find(v){
    for(var i = 0; i < trabajos.length; i++)
        if(v === trabajos[i].codigo)
            return true;
    return false;
}

/*function doDelete(per){
    if (!confirm("Esta Seguro?")) return;
	var index = personas.findIndex(function(x){return x.cedula===per.cedula; }); // findIndex Funcion que encuentra el indice de un arreglo
    if (index !== -1){
        //Referencia del método SPLICE
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
	personas.splice(index,1);
	Storage.store("personas",personas);
	listPersonas(personas);
    }
}

function doQuery(per){
    //Referencian del método find
    //https://www.w3schools.com/jsref/jsref_find.asp
    persona = personas.find(function(x){return x.cedula===per.cedula;});
    if (persona !== null){
        showPersona(persona);
    }
}

function showPersona(persona){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var pais = document.getElementById("pais");
    var mail = document.getElementById("mail");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
	
    cedula.value = persona.cedula;
    nombre.value = persona.nombre;
    pais.value = persona.pais;
    mail.value = persona.mail;
    if(persona.sexo==="M"){
        sexoMasc.checked=true;
    }
    else{
        sexoFem.checked=true;
    }
    
}*/

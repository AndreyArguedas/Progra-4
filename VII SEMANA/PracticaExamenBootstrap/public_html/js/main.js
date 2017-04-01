/* global Storage */

'use strict';

var persona;
var personas;

$(document).ready(function(){
    var $form = $("#formulario");
    //localStorage.clear();
    $form.on("send",doValidate());
    personas = Storage.retrieve("personas");
    if (personas === null){
        personas=[];
        Storage.store("personas",personas);
    }
    listPersonas(personas);
});

function doValidate(){
    var $cedula = $("#cedula");
    var $nombre = $("#nombre");
    var $pais = $("#pais");
    var $mail = $("#mail");
    var $sexoMasc = $("#sexoMasc");
    var $sexoFem = $("#sexoFem");
    var error = false;
    if($cedula.val().length === 0){
        error = true;
    }
    if($nombre.val().length === 0){
        error = true;
    }
    if($pais.val().length === 0){
        error = true;
    }
    if($mail.val().length === 0){
        error = true;
    }
    if(!$sexoMasc.is(":checked") && !$sexoMasc.is(":checked")){
        error = true;
    }
    
    if (error){event.preventDefault();} //cancela el envio de la informacion
}

function listPersonas(personas){
    $("#tablebody").html("");
    for(var i = 0; i < personas.length; i++)
        listPersona(personas[i]);
}

function listPersona(persona){
    var tr = document.createElement("tr");
    var td;
    td=document.createElement("td");
    td.appendChild(document.createTextNode(persona.cedula));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(persona.nombre));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(persona.pais));
    tr.appendChild(td);
    td = document.createElement("td");
    td.appendChild(document.createTextNode(persona.mail));
    tr.appendChild(td);
    td =document.createElement("td");
    var img = document.createElement("img");	
    switch(persona.sexo){
      case "M":
            img.src="img/male.png";
            break;
      case "F":
            img.src="img/female.png";
            break;		
    }
    img.width= img.height= "30";
    
    td.appendChild(img);
    tr.appendChild(td);
    td= document.createElement("td");
    img= document.createElement("img");
    img.src="img/edit.png";
    img.title="Editar";
    img.addEventListener("click", function(e){doQuery(persona);});
    td.appendChild(img);
    tr.appendChild(td);

    td= document.createElement("td");
    img= document.createElement("img");
    img.src="img/delete.png";
    img.title="Eliminar";
    img.addEventListener("click", function(e){doDelete(persona);});
    td.appendChild(img);
    tr.appendChild(td);
    
    $("#tablebody").append(tr); 
}

function doSubmit(){
    var $cedula = $("#cedula");
    var $nombre = $("#nombre");
    var $pais = $("#pais");
    var $mail = $("#mail");
    var $sexoMasc = $("#sexoMasc");
    var s;
    if($sexoMasc.is(":checked"))
        s = "M";
    else
        s = "F";
    persona = new Persona($cedula.val(),$nombre.val(),$pais.val(),$mail.val(),s);
    if(!find(persona.cedula)){
        personas.push(persona);
        Storage.store("personas", personas);
        listPersona(persona);
        
        window.alert("Data sent: " + persona.completo("-"));
        var $formulario = $('#formulario');
        $formulario[0].reset();
        	
    }
    else
        alert("No se puede ingresar este usuario, la cedula ya pertenece a otro usuario");
}

function find(v){
    for(var i = 0; i < personas.length; i++)
        if(v === personas[i].carnet)
            return true;
    return false;
}

function doDelete(per){
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
    
}
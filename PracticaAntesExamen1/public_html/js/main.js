/* global Storage */

'use strict';

var estudiante;
var estudiantes;

$(document).ready(function(){ //Cuando la pagina ya cargo
    var $mainform = $('#mainform');
    $mainform.on("send",doValidate());
    estudiantes = Storage.retrieve("estudiantes");
    if (estudiantes === null){
        estudiantes=[];
        Storage.store("estudiantes",estudiantes);
    }
    listEstudiantes(estudiantes);
    validateNota();
});


function doSubmit(){
    var $carnet= $('#carnet'); 
    var $nombre= $('#nombre');
    var $apellidos= $('#apellidos');
    estudiante = new Estudiante($carnet.val(),$nombre.val(),$apellidos.val(),0,0,0);
    if(!find(estudiante.carnet)){
        estudiantes.push(estudiante);
        Storage.store("estudiantes", estudiantes);

        var $listado = $("#listado");
        listPersona($listado, estudiante);

        window.alert("Data sent: " + estudiante.completo("-"));
        var $formulario = $('#mainform');
        $formulario[0].reset();
        	
    }
    else
        alert("No se puede ingresar este usuario, la cedula ya pertenece a otro usuario");
}

function doValidate(){        
    var $carnet= $('#carnet'); 
    var $nombre= $('#nombre');
    var $apellidos= $('#apellidos');
    var error=false;
	
    if ($carnet.val.length===0){
        error=true;
    }
    
    if ($nombre.val.length===0){
        error=true;
    }
    
    if ($apellidos.val.length===0){
        error=true;
    }
    
    if (error){event.preventDefault();} //cancela el envio de la informacion
}

function listEstudiantes(estudiantes){
    var $listado=$('#listado');
    $listado.innerHTML=""; //Limpiar
    for (var i=0;i<estudiantes.length;i++){
        listPersona($listado,estudiantes[i]);
    }
}

function listPersona(list,est){
    var tr =document.createElement("tr");
    var td;
    var input;
    td=document.createElement("td");
    td.appendChild(document.createTextNode(est.carnet));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(est.apellidos));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(est.nombre));
    tr.appendChild(td);
    td = document.createElement("td");
    input = "<input id='nota1" + est.carnet + "' class='nota' type='number' value='" + parseInt(est.nota1) + "'>";
    //input.addEventListener("onblur", function(){doUpdate1(est,input.value);});
    td.innerHTML = input;
    
    tr.appendChild(td);
    td = document.createElement("td");
    input = "<input id='nota2" + est.carnet + "' class='nota' type='number' value='" + parseInt(est.nota2) + "'>";
    td.innerHTML = input;
    //input.addEventListener("onblur", function(){doUpdate2(est,input.value());});
    tr.appendChild(td);
    td = document.createElement("td");
    input = "<input id='nota3" + est.carnet + "' class='nota' type='number' value='" + parseInt(est.nota3) + "'>";
    td.innerHTML = input;
    //input.addEventListener("onblur", function(){doUpdate3(est,input.value());});
    tr.appendChild(td);
    td = document.createElement("td");
    td.appendChild(document.createTextNode(est.promedio()));
    tr.appendChild(td);

    list.append(tr); 
    inputExamListener(est,td);
}

function inputExamListener(estudiante,promedio) {
    var $element;
    $element = $("#nota1"+estudiante.carnet+"");
    addListener($element, estudiante, 1, promedio);
    $element = $("#nota2"+estudiante.carnet+"");
    addListener($element, estudiante, 2, promedio);
    $element = $("#nota3"+estudiante.carnet+"");
    addListener($element, estudiante, 3, promedio);
}

function addListener(element, estudiante, i, p) {
    element.on("blur", function(e){
        if(i === 1){
            estudiante.nota1 = parseInt(e.target.value);
            p.innerText = estudiante.promedio();
        }
        if(i === 2){
            estudiante.nota2 = parseInt(e.target.value);
            p.innerText = estudiante.promedio();
        }
        if(i === 3){
            estudiante.nota3 = parseInt(e.target.value);
            p.innerText = estudiante.promedio();
        }
    });
    
}

function find(v){
    for(var i = 0; i < estudiantes.length; i++)
        if(v === estudiantes[i].cedula)
            return true;
    return false;
}

function validateNota(){
    /*$(".nota").keypress(function (e) {
     var $notas = $(".nota");
     for(var i = 0; i < $notas.length; i++){
         if($notas[i].value.length >= 2 && parseInt($notas[i].value) !== 10)
             $notas[i].value = "";
         else if($notas[i].value.length === 2 && parseInt($notas[i].value) === 10)
            if(e.key !== "0") 
                $notas[i].value = "";
     }
   });*/
}
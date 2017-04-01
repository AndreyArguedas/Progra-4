/* global Storage */

'use strict';

var empleado;
var empleados;
var cuenta;

$(document).ready(function(){
    var $form = $("#formEmpleado");
    //localStorage.clear();
    $form.on("send",doValidate());
    //var $form = $("#formCuenta");
    //localStorage.clear();
    //$form.on("send",doValidateCuenta());
    empleados = Storage.retrieve("empleados");
    if (empleados === null){
        empleados=[];
        Storage.store("personas",empleados);
    }
    listEmpleados(empleados);
    listCuentas();
});

function doValidate(){
    var $cedula = $("#cedula");
    var $nombre = $("#nombre");
    var error = false;
    if($cedula.val().length === 0){
        error = true;
    }
    if($nombre.val().length === 0){
        error = true;
    }

    if (error){event.preventDefault();} //cancela el envio de la informacion
}

function doValidateCuenta(){
    var $cedula = $("#cedula");
    var $nombre = $("#nombre");
    var error = false;
    if($cedula.val().length === 0){
        error = true;
    }
    if($nombre.val().length === 0){
        error = true;
    }

    if (error){event.preventDefault();} //cancela el envio de la informacion
}

function listEmpleados(empleados){
    $("#empleadoBody").html("");
    for(var i = 0; i < empleados.length; i++)
        listEmpleado(empleados[i]);
}

function listEmpleado(empleado){
    var tr = document.createElement("tr");
    var td;
    td=document.createElement("td");
    td.appendChild(document.createTextNode(empleado.cedula));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(empleado.nombre));
    tr.appendChild(td);
   
    $("#empleadoBody").append(tr);
    var o = document.createElement("option");
    o.appendChild(document.createTextNode(empleado.cedula));
    
    $("#mainSelector").append(o);
}

function doSubmit(){
    var $cedula = $("#cedula");
    var $nombre = $("#nombre");
    
    empleado = new Empleado($cedula.val(),$nombre.val(),[]);
    if(!findEmpleado(empleado.cedula)){
        empleados.push(empleado);
        Storage.store("empleados", empleados);
        listEmpleado(empleado);
        
        window.alert("Data sent: " + empleado.completo("-"));
        var $formulario = $('#formEmpleado');
        $formulario[0].reset();
        	
    }
    else
        alert("No se puede ingresar este usuario, la cedula ya pertenece a otro usuario");
}

function doSubmitCuenta(){
    var $cuenta = $("#numCuenta");
    var $empleado = $("#mainSelector");
    
    cuenta = new Cuenta($cuenta.val());
    if(!findCuenta(cuenta.numero)){
        for(var i = 0; i < empleados.length; i++){
            if($empleado.val() === empleados[i].cedula){
                empleados[i].cuentas.push(cuenta);
            }
        }
        window.alert("Data sent: " + cuenta.numero);
        var $formulario = $('#formCuenta');
        $formulario[0].reset();
        	
    }
    else
        alert("No se puede ingresar esta cuenta ya existe");
}
function listCuentas(){
    for(var e = 0; e < empleados.length; e++){
        var cuentas = empleados[e].cuentas;
        for(var i = 0; i < cuentas.length; i++){
            var tr = document.createElement("tr");
            var td;
            td = document.createElement("td");
            td.appendChild(document.createTextNode(cuentas[i].numero));
            tr.appendChild(td);
            td = document.createElement("td");
            td.appendChild(document.createTextNode(empleados[e].nombre));
            tr.appendChild(td);

            $("#cuentaBody").append(tr);
        }
    }
}

function findEmpleado(v){
    for(var i = 0; i < empleados.length; i++)
        if(v === empleados[i].carnet)
            return true;
    return false;
}

function findCuenta(v){
    for(var i = 0; i < empleados.length; i++){
        var cuentas = empleados[i].cuentas;
        for(var c = 0; c < cuentas.length; c++){
            if(v === cuentas[c].numero)
                return true;
        }
    }
    return false;
}


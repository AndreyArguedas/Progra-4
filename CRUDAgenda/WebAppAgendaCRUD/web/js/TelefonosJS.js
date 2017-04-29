/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function (){
    $("#btMostarForm").click(function () { //El boton azul
        limpiarForm();
        $("#myModalFormulario").modal("show");
    });
    
    //agrega los eventos las capas necesarias
    $("#cancelar").click(function () {
        limpiarForm();
        $("#myModalFormulario").modal("hide");
    });
    
    //agrega los eventos las capas necesarias
    $("#enviar").click(function () {
        enviar();
    });
});

$(document).ready(function () {
    consultarTelefonos();
});

function enviar(){ ///Funcion para meter un telefono a la base de datos
    if(validar()){
        $.ajax({
           url: 'TelefonosServlet',
           data:{
               accion: $("#telefonosAction").val(),
               numero: $("#numero").val(),
               cliente: $("#cliente").val(),
               observaciones: $("#observaciones").val()
           },
           error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function(data){ //AQUI VIENE LA RESPUESTA DEL AJAX
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    $("#myModalFormulario").modal("hide");
                    consultarTelefonos();
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                    }
                }
            },
            type: 'POST'
        });
    }
    else{
        mostrarMensaje("alert alert-danger", "Debe digitar los campos del formulario", "Error!");
    }
}

function consultarTelefonos() {
    //mostrarModal("myModal", "Espere por favor..", "Consultando la información de personas en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'TelefonosServlet',
        data: { //Se envia la info por json
            accion: "consultarTelefonos"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de las personas en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTabla(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            ocultarModal("myModal");

        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarTabla(dataJson){
    //limpia la información que tiene la tabla
    $("#tablaTelefonos").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaTelefonos").append(head); 
    row.append($("<th><b>Numero</b></th>"));
    row.append($("<th><b>Cedula Propietario</b></th>"));
    row.append($("<th><b>Descripcion</b></th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }
}

function dibujarFila(rowData){
    var row = $("<tr />");
    $("#tablaTelefonos").append(row); 
    row.append($("<td>" + rowData.pkTelefono + "</td>"));
    row.append($("<td>" + rowData.pkFkCedula + "</td>"));
    row.append($("<td>" + rowData.descripcion + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'modificar\');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminar\');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
}

function validar() {
    var validacion = true;
    
    $("#groupNumero").removeClass("has-error");
    $("#groupObservaciones").removeClass("has-error");

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#numero").val() === "") {
        $("#groupNumero").addClass("has-error");
        validacion = false;
    }
    if ($("#observaciones").val() === "") {
        $("#groupObservaciones").addClass("has-error");
        validacion = false;
    }

    return validacion;
}

function limpiarForm() {
    //setea el focus del formulario
    $('#numero').focus();
    $("#numero").removeAttr("readonly"); //elimina el atributo de solo lectura
    
    //se cambia la accion por agregarPersona
    $("#telefonosAction").val("agregarTelefono"); 

    //esconde el div del mensaje
    mostrarMensaje("hiddenDiv", "", "");

    //Resetear el formulario
    $('#formTelefonos').trigger("reset");
}

function mostrarMensaje(classCss, msg, neg) {
    //se le eliminan los estilos al mensaje
    $("#mesajeResult").removeClass();

    //se setean los estilos
    $("#mesajeResult").addClass(classCss);

    //se muestra la capa del mensaje con los parametros del metodo
    $("#mesajeResult").fadeIn("slow");
    $("#mesajeResultNeg").html(neg);
    $("#mesajeResultText").html(msg);
    $("#mesajeResultText").html(msg);
}
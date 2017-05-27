/***********************************************************************************/
/***********************************************************************************/
/* Mensaje MODAL
/***********************************************************************************/
/***********************************************************************************/
/* Para implementar el mensaje modal debe existir el siguiente cógido html 
 * en la pagina que se va a mostrar
 
 <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
            </div>
            <div class="modal-body" id="myModalMessage">
                <p>This is a small modal.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
 */

 function mostrarModal(idDiv ,titulo, mensaje){
     $("#"+idDiv+"Title").html(titulo);
     $("#"+idDiv+"Message").html(mensaje);
     $("#"+idDiv).modal();
 }
 
 function ocultarModal(idDiv){
     $("#"+idDiv).modal("hide");	
 }
 
  function cambiarMensajeModal(idDiv ,titulo, mensaje){
     $("#"+idDiv+"Title").html(titulo);
     $("#"+idDiv+"Message").html(mensaje);
 }

/***********************************************************************************/
/***********************************************************************************/
/* Fin de las opcines de mensaje MODAL
/***********************************************************************************/
/***********************************************************************************/
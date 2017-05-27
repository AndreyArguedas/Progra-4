<%-- 
    Document   : login
    Created on : May 13, 2016, 1:20:00 PM
    Author     : chgari
--%>
<%-- PARA EL MANEJO DE SESSIONES ES REQUERIDO LA LINEA session="true"--%>
<%@page contentType="text/html" pageEncoding="UTF-8" session="false" %>


<!DOCTYPE html>
<html>
    <head>
        <title>LOGIN -  Ejemplo de secciones</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

        

        <!-- ********************************************************** -->
        <!-- Estilos de la página -->
        <!-- ********************************************************** -->
        <link href="css/css.css" rel="stylesheet" type="text/css"/>

        <!-- ********************************************************** -->
        <!-- Script's de UTILERIAS -->
        <!-- ********************************************************** -->
        <script src="js/utils.js" type="text/javascript"></script>

        <!-- ********************************************************** -->
        <!-- Script's de PERSONAS -->
        <!-- ********************************************************** -->
        <script src="js/LoginJS.js" type="text/javascript"></script>


    </head>
    <body>

        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar mensajes                  -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
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
                </div>
            </div>
        </div>
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <br/><br/><br/><br/>
        
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h1>Login</h1>
                <br/>
                <form role="form" onsubmit="return false;" id="formLogin">
                    <div class="form-group" id="groupUsario">
                        <label for="cedula">Usuario:</label>
                        <input type="text" class="form-control" id="usuario" autofocus="true" placeholder="Usuario">
                    </div>

                    <div class="form-group" id="groupPassword">
                        <label for="nombre">Contraseña:</label>
                        <input type="password" class="form-control" id="password" placeholder="Contraseña" >
                    </div>

                    <div class="form-group">
                        <input type="hidden" value="agregarPersona" id="personasAction"/>
                        <button type="submit" class="btn btn-primary" id="enviar">Ingresar</button>
                        <button type="reset" class="btn btn-danger" id="cancelar">Cancelar</button>
                    </div>

                    <div class="form-group height25" >
                        <div class="alert alert-success hiddenDiv" id="mesajeResult">
                            <strong id="mesajeResultNeg">Info!</strong> 
                            <span id="mesajeResultText">This alert box could indicate a neutral informative change or action.</span>
                        </div>
                    </div>

                </form>
                
            </div>
            <div class="col-md-4"></div>
          </div>
        

    </body>
</html>
</html>
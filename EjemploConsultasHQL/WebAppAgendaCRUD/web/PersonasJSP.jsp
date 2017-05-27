<%-- 
    Document   : PersonasJSP
    Created on : Apr 14, 2016, 2:30:49 PM
    Author     : chgari
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*" session="true" %>

<%

    HttpSession sesion = request.getSession(true);
    String tipoUsuario = "";
    if(sesion!=null){
        if (sesion.getAttribute("usuario")  == null) {
            response.sendRedirect("LoginJSP.jsp");
        }else{
            tipoUsuario = (String)sesion.getAttribute("tipo");
        }
    }else{
        response.sendRedirect("LoginJSP.jsp");
    }
%>
<!DOCTYPE html>
<html>
    <head>
        <title>Personas - Sistema para la administración de contáctos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

        <!-- ********************************************************** -->
        <!-- Includes para el datapicker -->
        <!-- ********************************************************** -->
        <link href="css/datetimepicker.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/datetimepicker.js" type="text/javascript"></script>

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
        <script src="js/PersonasJS.js" type="text/javascript"></script>


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
        
        <div class="modal fade" id="myModalSesion" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Datos de la sesión</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <ul>
                            <li><p><b>Usuario:</b> <% out.print(sesion.getAttribute("usuario")); %></p></li>
                            <li><p><b>Tipo: </b><% out.print(sesion.getAttribute("tipo")); %></p></li>
                            <li><p><b>Id sesión:</b> <% out.println(sesion.getId()); %></p></li>
                            <li><p><b>Nueva?: </b> <% out.println(sesion.isNew()); %></p></li>
                            <% 
                                long longDuracion=sesion.getLastAccessedTime(); sesion.getCreationTime();
                                Date duracion=new Date(longDuracion);
                            %>
                            <li><p><b>Tiempo sesión: </b><% out.println(duracion.getMinutes()+"min. "+duracion.getSeconds()+"seg."); %></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->

        <div class="modal fade" id="myModalTelefonos" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTelefonosTitle">Lista de telefonos</h4>
                    </div>
                    <div class="modal-body" id="myModalTelefonosMessage">
                        <table class="table table-hover table-condensed" id="tablaTelefonos"></table>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar el formulario de insertar -->
        <!-- o modificar
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <div class="modal fade" id="myModalFormulario" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insertar / Modificar Personas
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formPersonas">
                            <div class="form-group" id="groupCedula">
                                <label for="cedula">Cedula:</label>
                                <input type="text" class="form-control" id="cedula" autofocus="true" placeholder="Cedula">
                            </div>

                            <div class="form-group" id="groupNombre">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Nombre" >
                            </div>

                            <div class="form-group" id="groupApellido1">
                                <label for="apellido1">Primer Apellido</label>
                                <input type="text" class="form-control" id="apellido1" placeholder="Primer Apellido">
                            </div>

                            <div class="form-group" id="groupApellido2">
                                <label for="apellido2">Segundo Apellido</label>
                                <input type="text" class="form-control" id="apellido2" placeholder="Segundo Apellido">
                            </div>

                            <div class="form-group" id="groupFechaNacimiento">
                                <label for="dpFechaNacimiento">Fecha Nacimiento:</label>
                                <div id="dpFechaNacimiento" class="input-group date form_date" data-date="" data-date-format="dd/mm/yyyy" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
                                    <input class="form-control" type="text" value="" readonly placeholder="dd/mm/aaaa" id="dpFechaNacimientoText">
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group" id="groupSexo">
                                <label for="sexo">Sexo:</label>
                                <select class="form-control" id="sexo">
                                    <option value="1" selected="selected">Femenino</option>
                                    <option value="2">Masculino</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="observaciones">Observaciones:</label>
                                <textarea class="form-control" rows="3" id="observaciones"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="hidden" value="agregarPersona" id="personasAction"/>
                                <% if(tipoUsuario.equals("Administrador")) { %> 
                                    <button type="submit" class="btn btn-primary" id="enviar">Guardar</button>
                                <% } %> 
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
                </div>
            </div>
        </div>
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->

        <div class="container">
            <div class="page-header">
                <h1>Agenda <small>Sistema para la administración de contáctos</small></h1>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL SUPERIOR -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <!-- ********************************************************** -->
                        <!-- COLUMNA DEL MENU -->
                        <!-- ********************************************************** -->
                        <div class="col-md-4">
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Menú Principal
                                    <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <% if(tipoUsuario.equals("Administrador")) { %> 
                                        <li><a href="#">Mantenimiento Personas</a></li>
                                        <li><a href="#">Mantenimiento Teléfonos</a></li>
                                        <li><a href="#">Mantenimiento Direcciones</a></li>
                                        <li class="divider"></li>
                                    <% } %>
                                    <li><a href="Logout">Cerrar Sesión</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- ********************************************************** -->
                        <!-- COLUMNA DEL MENU -->
                        <!-- ********************************************************** -->
                        <div class="col-md-4" style="text-align: center">
                            <button type="button" class="btn btn-info centered" data-toggle="modal" data-target="#myModalSesion" id="btMostarSesion">Mostrar datos de la sesión</button>
                        </div>
                        <!-- ********************************************************** -->
                        <!-- COLUMNA DEL BOTON DE CERRAR SESION -->
                        <!-- ********************************************************** -->
                        <div class="col-md-4" style="text-align: right;">
                            <a class="btn btn-warning" href="Logout" role="button">
                                <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                                Cerrar Sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL DEL MANTENIMIENTO DE PERSONAS -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Mantenimiento de Personas</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalFormulario" id="btMostarForm">Insertar Persona</button>
                    </center><br>
                    <!-- ********************************************************** -->
                    <div class="col-sm-12">
                        <form role="form" onsubmit="return false;" id="formPersonas" class="form-horizontal centered">
                            <div class="form-group" id="groupCedula">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <p><b>Buscar por nombre de la persona:</b></p>
                                </div>
                                <div class="col-sm-4">
                                    <input type="email" class="form-control" id="email" placeholder="Digite el nombre de la persona">
                                </div>
                                <div class="col-sm-4">
                                    <button type="button" class="btn btn-info centered" data-toggle="modal" data-target="#myModalFormulario" id="btMostarForm">
                                        Buscar <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- ********************************************************** -->

                    <table class="table table-hover table-condensed" id="tablaPersonas"></table>

                </div>
                <div class="panel-footer">Nota: Acciones validas dependeran del rol del usuario</div>
            </div>
        </div>


    </body>
</html>
</html>

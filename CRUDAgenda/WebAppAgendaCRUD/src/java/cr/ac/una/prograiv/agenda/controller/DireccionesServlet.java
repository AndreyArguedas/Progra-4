/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.agenda.bl.DireccionesBL;
import cr.ac.una.prograiv.agenda.domain.Direcciones;
import cr.ac.una.prograiv.agenda.domain.Telefonos;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author LAPTOP
 */
public class DireccionesServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter(); //Preguntar al profe que hace esto
        try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;

            //Se crea el objeto Persona
            Direcciones d = new Direcciones();

            //Se crea el objeto de la logica de negocio
            DireccionesBL dBL = new DireccionesBL();

            Thread.sleep(1000);

            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();

            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            switch (accion) {
                case "consultarDirecciones":
                    json = new Gson().toJson(dBL.findAll(Direcciones.class.getName()));
                    out.print(json);
                    break;

                case "agregarDireccion":
                case "modificarDireccion":
                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    d.setPkIdDireccion(0);
                    d.setNomLugar(request.getParameter("nombre"));
                    d.setDireccion(request.getParameter("direccion"));
                    d.setFkCedula(112540149);
                    if (accion.equals("agregarDireccion")) { //es insertar personas
                        //Se guarda el objeto
                        dBL.save(d);

                        //Se imprime la respuesta con el response
                        out.print("C~La persona fue ingresada correctamente");

                    } else {//es modificar persona
                        //Se guarda el objeto
                        dBL.merge(d);

                        //Se imprime la respuesta con el response
                        out.print("C~La persona fue modificada correctamente");
                    }

                    break;

                default:
                    out.print("E~No se indico la acción que se desea realizare");
                    break;
            }

        } catch (NumberFormatException e) { //Los errores tienen un E~ en los primeros 2 caracteres para saber que hubo error
            out.print("E~" + e.getMessage());
        } catch (Exception e) {
            out.print("E~" + e.getMessage());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

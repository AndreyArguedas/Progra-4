/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.agenda.bl.TelefonosBL;
import cr.ac.una.prograiv.agenda.domain.Personas;
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
public class TelefonosServlet extends HttpServlet {

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
            Telefonos t = new Telefonos();

            //Se crea el objeto de la logica de negocio
            TelefonosBL tBL = new TelefonosBL();

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
                case "consultarTelefonos":
                    json = new Gson().toJson(tBL.findAll(Telefonos.class.getName()));
                    out.print(json);
                    break;
                    
                case "agregarTelefono": case "modificarTelefono":
                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    t.setPkTelefono(Integer.parseInt(request.getParameter("numero")));
                    t.setPkFkCedula(Integer.parseInt(request.getParameter("cliente")));
                    t.setDescripcion(request.getParameter("observaciones"));

                    //Guardar Correctamente en la base de datos
                    /*String fechatxt = request.getParameter("fechaNacimiento");
                    DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
                    Date date = format.parse(fechatxt);*/

                    if (accion.equals("agregarTelefono")) { //es insertar personas
                        //Se guarda el objeto
                        tBL.save(t);

                        //Se imprime la respuesta con el response
                        out.print("C~La persona fue ingresada correctamente");

                    } else {//es modificar persona
                        //Se guarda el objeto
                        tBL.merge(t);

                        //Se imprime la respuesta con el response
                        out.print("C~La persona fue modificada correctamente");
                    }

                    break;
                /*case "eliminarPersonas":
                    if(session.getAttribute("tipo").equals("Administrador")){ //verifica que solo los administradores pueden eliminar personas
                        p.setPkCedula(Integer.parseInt(request.getParameter("idPersona")));
                    
                        //Se elimina el objeto
                        pBL.delete(p);

                        //Se imprime la respuesta con el response
                        out.print("La persona fue eliminada correctamente");
                    }else{
                        out.print("E~Solo los administradores pueden eliminar personas");
                    }
                    break;
                    
                case "consultarPersonasByID":
                    //se consulta la persona por ID
                    p = pBL.findById(Integer.parseInt(request.getParameter("idPersona")));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(p);
                    out.print(json);
                    break;
                    
                    
                case "agregarPersona": case "modificarPersona":

                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    p.setPkCedula(Integer.parseInt(request.getParameter("cedula")));
                    p.setNombre(request.getParameter("nombre"));
                    p.setApellido1(request.getParameter("apellido1"));
                    p.setApellido2(request.getParameter("apellido2"));

                    //Guardar Correctamente en la base de datos
                    String fechatxt = request.getParameter("fechaNacimiento");
                    DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
                    Date date = format.parse(fechatxt);

                    p.setFecNacimiento(date);
                    p.setSexo(Integer.parseInt(request.getParameter("sexo")));
                    p.setObservaciones(request.getParameter("observaciones"));

                    if(accion.equals("agregarPersona")){ //es insertar personas
                        //Se guarda el objeto
                        pBL.save(p);

                        //Se imprime la respuesta con el response
                        out.print("C~La persona fue ingresada correctamente");
                        
                    }else{//es modificar persona
                        //Se guarda el objeto
                        pBL.merge(p);

                        //Se imprime la respuesta con el response
                        out.print("C~La persona fue modificada correctamente");
                    }
                    
                    break;*/
                    
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

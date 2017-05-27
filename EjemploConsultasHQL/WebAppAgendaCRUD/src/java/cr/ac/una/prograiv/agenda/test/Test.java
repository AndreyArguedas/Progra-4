/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.test;

import cr.ac.una.prograiv.agenda.bl.PersonasBL;
import cr.ac.una.prograiv.agenda.dao.PersonasDAO;
import cr.ac.una.prograiv.agenda.domain.Personas;
import java.util.Date;
import java.util.LinkedHashMap;

/**
 *
 * @author chgari
 */
public class Test {
    public static void main(String arg[]){
        PersonasDAO dao = new PersonasDAO();
        dao.findAll();
        LinkedHashMap<String, Object> parametros = new LinkedHashMap<>();
        parametros.put("id", 1);
        dao.createQueryHQL(parametros);
    }
}
















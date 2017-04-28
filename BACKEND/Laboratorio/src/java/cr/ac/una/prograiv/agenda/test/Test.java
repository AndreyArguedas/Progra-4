/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.test;

import cr.ac.una.prograiv.agenda.dao.DireccionesDAO;
import cr.ac.una.prograiv.agenda.dao.PersonasDAO;
import cr.ac.una.prograiv.agenda.dao.TelefonosDAO;
import cr.ac.una.prograiv.agenda.domain.Direcciones;
import cr.ac.una.prograiv.agenda.domain.Personas;
import cr.ac.una.prograiv.agenda.domain.Telefonos;
import java.util.Date;

/**
 *
 * @author LAPTOP
 */
public class Test {
    public static void main(String [] args){
        PersonasDAO pdao = new PersonasDAO();
        Personas p1 = new Personas(11123,"Andrey","Arguedas",new Date());
        /*pdao.save(p1);*/
        /*DireccionesDAO ddao = new DireccionesDAO();
        Direcciones d1 = new Direcciones(p1,"San Joaquin","Del super a la derecha");
        ddao.save(d1);*/
        TelefonosDAO tdao = new TelefonosDAO();
        Telefonos t1 = new Telefonos(87435,p1);
        tdao.save(t1);
    }
}

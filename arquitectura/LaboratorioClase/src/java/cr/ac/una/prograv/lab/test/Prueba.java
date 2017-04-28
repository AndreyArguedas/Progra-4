/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.lab.test;

import cr.ac.una.prograv.agenda.bl.PersonasBL;
import cr.ac.una.prograv.lab.dao.DireccionesDAO;
import cr.ac.una.prograv.lab.dao.PersonaDAO;
import cr.ac.una.prograv.lab.dao.TelefonosDao;
import cr.ac.una.prograv.lab.dominio.Direcciones;
import cr.ac.una.prograv.lab.dominio.Personas;
import cr.ac.una.prograv.lab.dominio.Telefonos;
import java.util.Date;

/**
 *
 * @author der12
 */
public class Prueba {
    
    public static void main(String[] args) {

        //Personas p=new Personas(444,"Andrey"," Arguedas",new Date());
        //PersonaDAO pdao = new PersonaDAO();
        //pdao.save(p);
        PersonaDAO pdao = new PersonaDAO();
        Personas p = pdao.findByID(444);
        PersonasBL bl = new PersonasBL();
        bl.delete(p);
        /*Direcciones d = new Direcciones(p,"BB","BB");
        DireccionesDAO dirdao = new DireccionesDAO();
        dirdao.save(d);*/
        /*Telefonos t = new Telefonos(777,p);
        TelefonosDao tdao = new TelefonosDao();
        tdao.save(t);*/
        //PersonasBL bl = new PersonasBL();
        /*for(Personas p : pDao.findAll())   ELIMINA A TODOS
        pDao.delete(p);
    }*/

        //p.setNombre("Adriana");
        //pDao.merge(p);
        //pDao.save(p);
        /*Personas p = pDao.findByID((Integer) 444);
        p.setApellido1("Espinoza");
        pDao.merge(p);*/
        //Personas p1 = new Personas(12345,"")
    }
}
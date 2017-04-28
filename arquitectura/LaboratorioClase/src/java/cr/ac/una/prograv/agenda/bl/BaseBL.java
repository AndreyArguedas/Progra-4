/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.agenda.bl;

import cr.ac.una.prograv.lab.dao.DireccionesDAO;
import cr.ac.una.prograv.lab.dao.IBaseDAO;
import cr.ac.una.prograv.lab.dao.PersonaDAO;
import cr.ac.una.prograv.lab.dao.TelefonosDao;
import java.util.LinkedHashMap;
import java.util.List;

/**
 *
 * @author Estudiante
 */
public class BaseBL {
    private final LinkedHashMap<String,IBaseDAO> daos;
    
    public BaseBL(){
        daos = new LinkedHashMap();
        daos.put("cr.ac.una.prograv.lab.dominio.Personas",new PersonaDAO());
        daos.put("cr.ac.una.prograv.lab.dominio.Telefonos",new TelefonosDao());
        daos.put("cr.ac.una.prograv.lab.dominio.Direcciones",new DireccionesDAO());
    }
    
    public IBaseDAO getDao(String className) {
        return daos.get(className);
    }
    
}

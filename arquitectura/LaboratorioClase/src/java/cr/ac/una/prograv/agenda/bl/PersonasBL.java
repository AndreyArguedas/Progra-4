/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.agenda.bl;

import cr.ac.una.prograv.lab.dominio.Personas;
import java.util.List;

/**
 *
 * @author Estudiante
 */
public class PersonasBL extends BaseBL implements IBaseBL<Personas,Integer> {

    public PersonasBL(){
        super();
    }
    
    @Override
    public void save(Personas o) {
        if(this.findByID(o.getPkCedula()) == null)
            this.getDao(o.getClass().getName()).save(o);
        else
            System.out.println("Error la persona ya existe");
    }

    @Override
    public Personas merge(Personas o) {
        return (Personas) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Personas o) {
        /*Ej: 1.1
          ELIMINAR UNA PERSONA SOLO SI TIENE MENOS DE 8 TELEFONOS Y
          3 DIRECCIONES
        */
            if (o.getTelefonoses().size() <= 8 && o.getDireccioneses().size() == 3) {
                this.getDao(o.getClass().getName()).delete(o);
        }
    }

    @Override
    public Personas findByID(Integer o) {
        return (Personas)this.getDao(Personas.class.getName()).findByID(o);
    }

    @Override
    public List<Personas> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

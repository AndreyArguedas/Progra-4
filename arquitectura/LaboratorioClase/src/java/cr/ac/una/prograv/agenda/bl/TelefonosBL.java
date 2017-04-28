/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.agenda.bl;

import cr.ac.una.prograv.lab.dominio.Telefonos;
import java.util.List;

/**
 *
 * @author Estudiante
 */
public class TelefonosBL extends BaseBL implements IBaseBL<Telefonos,Integer>{

    public TelefonosBL(){
        super();
    }
    
    @Override
    public void save(Telefonos o) {
        if(this.findByID(o.getPkTelefono()) == null)
            this.getDao(o.getClass().getName()).save(o);
        else
            System.out.println("Error el telefono ya existe");
    }

    @Override
    public Telefonos merge(Telefonos o) {
        return (Telefonos) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Telefonos o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Telefonos findByID(Integer o) {
        return (Telefonos)this.getDao(Telefonos.class.getName()).findByID(o);
    }

    @Override
    public List<Telefonos> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

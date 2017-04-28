/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.agenda.bl;

import cr.ac.una.prograv.lab.dominio.Direcciones;
import java.util.List;

/**
 *
 * @author Estudiante
 */
public class DireccionesBL extends BaseBL implements IBaseBL<Direcciones,Integer>{

    public DireccionesBL(){
        super();
    }
    
    @Override
    public void save(Direcciones o) {
         if(this.findByID(o.getPkIdDireccion()) == null)
            this.getDao(o.getClass().getName()).save(o);
        else
            System.out.println("Error la direccion ya existe");
    }

    @Override
    public Direcciones merge(Direcciones o) {
        return (Direcciones) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Direcciones o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Direcciones findByID(Integer o) {
        return (Direcciones)this.getDao(Direcciones.class.getName()).findByID(o);
    }

    @Override
    public List<Direcciones> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

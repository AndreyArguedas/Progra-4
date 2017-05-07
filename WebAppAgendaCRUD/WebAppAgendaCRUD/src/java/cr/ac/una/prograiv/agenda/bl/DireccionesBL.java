/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.bl;

import cr.ac.una.prograiv.agenda.domain.Direcciones;
import java.util.List;

/**
 *
 * @author chgari
 */
public class DireccionesBL extends BaseBL implements IBaseBL<Direcciones, Integer>{
    public DireccionesBL() {
        super();
    }
    
    @Override
    public void save(Direcciones o) {
        this.getDao(o.getClass().getName()).save(o);
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
    public Direcciones findById(Integer o) {
        return (Direcciones) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Direcciones> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

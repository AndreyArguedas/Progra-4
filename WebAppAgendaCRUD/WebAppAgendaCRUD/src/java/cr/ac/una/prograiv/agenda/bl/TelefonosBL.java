/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.bl;

import cr.ac.una.prograiv.agenda.domain.Telefonos;
import java.util.List;

/**
 *
 * @author chgari
 */
public class TelefonosBL extends BaseBL implements IBaseBL<Telefonos, Integer>{

    @Override
    public void save(Telefonos o) {
        this.getDao(o.getClass().getName()).save(o);
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
    public Telefonos findById(Integer o) {
        return (Telefonos) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Telefonos> findAll(String className) {
       return this.getDao(className).findAll();
    }
    
}

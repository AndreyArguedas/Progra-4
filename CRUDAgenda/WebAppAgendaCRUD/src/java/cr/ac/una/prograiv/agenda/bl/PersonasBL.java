/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.bl;

import cr.ac.una.prograiv.agenda.dao.PersonasDAO;
import cr.ac.una.prograiv.agenda.domain.Personas;
import cr.ac.una.prograiv.agenda.domain.Telefonos;
import java.util.List;

/**
 *
 * @author chgari
 */
public class PersonasBL extends BaseBL implements IBaseBL<Personas, Integer>{
    public PersonasBL() {
        super();
    }
    @Override
    public void save(Personas o) {
        this.getDao(o.getClass().getName()).save(o);
    }
    @Override
    public Personas merge(Personas o) {
        return (Personas) this.getDao(o.getClass().getName()).merge(o);
    }
    @Override
    public void delete(Personas o) {
        this.getDao(o.getClass().getName()).delete(o);
    }
    @Override
    public Personas findById(Integer o) {
        return (Personas) this.getDao(Personas.class.getName()).findById(o);
    }
    @Override
    public List<Personas> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
    public List<Personas> findAllLike(int ced){  ///Esto no se ve elegante, preguntarle al profe si hay una mejor soluciuon
        PersonasDAO pd = new PersonasDAO();
        return pd.findAllLike(ced);
    }
    
}

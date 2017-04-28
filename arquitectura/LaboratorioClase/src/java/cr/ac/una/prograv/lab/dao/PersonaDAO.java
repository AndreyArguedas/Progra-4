/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.lab.dao;

import cr.ac.una.prograv.lab.dominio.Personas;
import cr.ac.una.prograv.lab.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author der12
 */
public class PersonaDAO extends HibernateUtil implements IBaseDAO<Personas,Integer>{

    @Override
    public void save(Personas o) {
        try{
            iniciarOperacion();
            getSesion().save(o);
            getTransac().commit();
            
        }catch(HibernateException be){
            manejarException(be);
            throw be;
        }
        finally{
            getSesion().close();
        }
    }

    @Override
    public Personas merge(Personas o) throws HibernateException { ////UPDATE
        try{
            iniciarOperacion();
            o = (Personas) getSesion().merge(o);
            getTransac().commit();
        }
        catch(HibernateException be){
            manejarException(be);
            throw be;
        }
        finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Personas o) {
        try {
            iniciarOperacion();
            getSesion().delete(o);
            getTransac().commit();
        }
        catch(HibernateException be){
            manejarException(be);
            throw be;
        }
        finally{
            getSesion().close();
        }
        
    }

    @Override
    public Personas findByID(Integer key) {
        Personas personas = null;
        try{
            iniciarOperacion();
            personas = (Personas) getSesion().get(Personas.class,key);
        }
        catch(HibernateException be){
            manejarException(be);
            throw be;
        }
        finally{
            getSesion().close();
        }
        return personas;
    }

    @Override
    public List<Personas> findAll() {
        List<Personas> listaPersonas;
        try{
            iniciarOperacion();
            listaPersonas =  getSesion().createQuery("from Personas").list();
        }
        finally{
            getSesion().close();
        }
        return listaPersonas;
    }
    
}

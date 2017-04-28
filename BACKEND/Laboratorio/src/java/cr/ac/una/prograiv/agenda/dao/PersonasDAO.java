/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.dao;

import cr.ac.una.prograiv.agenda.domain.Personas;
import cr.ac.una.prograiv.agenda.utils.HibernateUtil;
import java.math.BigInteger;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author LAPTOP
 */
public class PersonasDAO extends HibernateUtil implements IBaseDAO<Personas,java.math.BigInteger>{

    @Override
    public void save(Personas o) {
        try{
            iniciarOperacion();
            getSesion().save(o);
            getTransac().commit();
        }catch (HibernateException he){
            manejarExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
    }

    @Override
    public Personas merge(Personas o) throws HibernateException{
        try{
            iniciarOperacion();
            o = (Personas) getSesion().merge(o);
            getTransac().commit();
        }catch (HibernateException he){
            manejarExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return o;     
    }

    @Override
    public void delete(Personas o) {
        try{
            iniciarOperacion();
            getSesion().delete(o);
            getTransac().commit();
        }catch (HibernateException he){
            manejarExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
    }

    @Override
    public Personas findById(BigInteger id) {
        Personas p = null;
        try{
            iniciarOperacion();
            p = (Personas) getSesion().get(Personas.class, id);
        }finally{
            getSesion().close();
        }
        return p;
    }

    @Override
    public List<Personas> findAll() {
        List<Personas> listaPersonas;
        try{
            iniciarOperacion();
            listaPersonas =  getSesion().createQuery("from Personas").list();
        }finally{
            getSesion().close();
        }
        return listaPersonas;
    }
 
}

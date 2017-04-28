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
 * @author chgari
 */
public class PersonasDAO extends HibernateUtil implements IBaseDAO<Personas, Integer>{
    
    
    
    @Override
    public void save(Personas o) {
            try {
                iniciaOperacion();
                getSesion().save(o);
                getTransac().commit();
            } catch (HibernateException he) {
                manejaExcepcion(he);
                throw he;
            } finally {
                getSesion().close();
            }
    }
    
    
    
    @Override
    public Personas merge(Personas o) throws HibernateException {
        try {
            iniciaOperacion();
            o = (Personas) getSesion().merge(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
        return o;
    }
    
    
    
    
    
    

    @Override
    public void delete(Personas o) {
        try {
            iniciaOperacion();
            getSesion().delete(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
    }

    @Override
    public Personas findById(Integer id) {
        Personas personas = null;

        try {
            iniciaOperacion();
            personas = (Personas) getSesion().get(Personas.class, id);
        } finally {
            getSesion().close();
        }
        return personas;
    }

    @Override
    public List<Personas> findAll() {
        List<Personas> listaPersonas;
        try {
            iniciaOperacion();//HQL
            listaPersonas = getSesion().createQuery("from Personas").list();
        } finally {
            getSesion().close();
        }

        return listaPersonas;
    }
    
    
}

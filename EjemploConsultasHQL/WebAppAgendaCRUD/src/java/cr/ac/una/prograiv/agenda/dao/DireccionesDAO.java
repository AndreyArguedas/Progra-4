/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.dao;

import cr.ac.una.prograiv.agenda.domain.Direcciones;
import cr.ac.una.prograiv.agenda.utils.HibernateUtil;
import java.util.LinkedHashMap;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author chgari
 */
public class DireccionesDAO extends HibernateUtil implements IBaseDAO<Direcciones, Integer>{

    @Override
    public void save(Direcciones o) {
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
    public Direcciones merge(Direcciones o) {
        try {
            iniciaOperacion();
            o = (Direcciones) getSesion().merge(o);
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
    public void delete(Direcciones o) {
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
    public Direcciones findById(Integer id) {
        Direcciones direcciones = null;

        try {
            iniciaOperacion();
            direcciones = (Direcciones) getSesion().get(Direcciones.class, id);
        } finally {
            getSesion().close();
        }
        return direcciones;
    }

    @Override
    public List<Direcciones> findAll() {
        List<Direcciones> listaDirecciones;
        try {
            iniciaOperacion();
            listaDirecciones = getSesion().createQuery("from Direcciones").list();
        } finally {
            getSesion().close();
        }

        return listaDirecciones;
    }

    @Override
    public List createQueryHQL(LinkedHashMap<String, Object> parametros) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}

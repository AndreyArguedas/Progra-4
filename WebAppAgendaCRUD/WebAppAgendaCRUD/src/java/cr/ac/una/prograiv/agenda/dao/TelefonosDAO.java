/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.dao;

import cr.ac.una.prograiv.agenda.domain.Personas;
import cr.ac.una.prograiv.agenda.domain.Telefonos;
import cr.ac.una.prograiv.agenda.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author chgari
 */
public class TelefonosDAO extends HibernateUtil implements IBaseDAO<Telefonos, Integer>{

    @Override
    public void save(Telefonos o) {
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
    public Telefonos merge(Telefonos o) {
         try {
            iniciaOperacion();
            o = (Telefonos) getSesion().merge(o);
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
    public void delete(Telefonos o) {
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
    public Telefonos findById(Integer id) {
        Telefonos telefonos = null;

        try {
            iniciaOperacion();
            telefonos = (Telefonos) getSesion().get(Telefonos.class, id);
        } finally {
            getSesion().close();
        }
        return telefonos;
    }

    @Override
    public List<Telefonos> findAll() {
        List<Telefonos> listaTelefonos;
        try {
            iniciaOperacion();
            listaTelefonos = getSesion().createQuery("from Telefonos").list();
        } finally {
            getSesion().close();
        }

        return listaTelefonos;
    }
    
}

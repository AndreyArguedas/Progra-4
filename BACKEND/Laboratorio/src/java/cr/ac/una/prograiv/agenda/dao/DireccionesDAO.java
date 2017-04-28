/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.dao;

import cr.ac.una.prograiv.agenda.domain.Direcciones;
import cr.ac.una.prograiv.agenda.utils.HibernateUtil;
import java.math.BigInteger;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author LAPTOP
 */
public class DireccionesDAO extends HibernateUtil implements IBaseDAO<Direcciones,java.math.BigInteger>{

    @Override
    public void save(Direcciones o) {
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
    public Direcciones merge(Direcciones o) {
        try {
            iniciarOperacion();
            o = (Direcciones) getSesion().merge(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejarExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
        return o;    
    }

    @Override
    public void delete(Direcciones o) {
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
    public Direcciones findById(BigInteger o) {
        Direcciones p = null;
        try{
            iniciarOperacion();
            p = (Direcciones) getSesion().get(Direcciones.class, o);
        }finally{
            getSesion().close();
        }
        return p;
    }

    @Override
    public List<Direcciones> findAll() {
        List<Direcciones> listaPersonas;
        try{
            iniciarOperacion();
            listaPersonas =  getSesion().createQuery("from Direcciones").list();
        }finally{
            getSesion().close();
        }
        return listaPersonas;
    }
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.dao;

import cr.ac.una.prograiv.agenda.domain.Telefonos;
import cr.ac.una.prograiv.agenda.utils.HibernateUtil;
import java.math.BigInteger;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author LAPTOP
 */
public class TelefonosDAO extends HibernateUtil implements IBaseDAO<Telefonos,java.math.BigInteger>{

    @Override
    public void save(Telefonos o) {
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
    public Telefonos merge(Telefonos o) {
        try {
            iniciarOperacion();
            o = (Telefonos) getSesion().merge(o);
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
    public void delete(Telefonos o) {
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
    public Telefonos findById(BigInteger o) {
        Telefonos p = null;
        try{
            iniciarOperacion();
            p = (Telefonos) getSesion().get(Telefonos.class, o);
        }finally{
            getSesion().close();
        }
        return p;
    }

    @Override
    public List<Telefonos> findAll() {
        List<Telefonos> listaPersonas;
        try{
            iniciarOperacion();
            listaPersonas =  getSesion().createQuery("from Telefonos").list();
        }finally{
            getSesion().close();
        }
        return listaPersonas;
    }    
}

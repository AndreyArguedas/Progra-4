/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.lab.dao;

import cr.ac.una.prograv.lab.dominio.Telefonos;
import cr.ac.una.prograv.lab.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Estudiante
 */
public class TelefonosDao extends HibernateUtil implements IBaseDAO<Telefonos,Integer> {

    @Override
    public void save(Telefonos o) {
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
    public Telefonos merge(Telefonos o) {
        try{
            iniciarOperacion();
            o = (Telefonos) getSesion().merge(o);
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
    public void delete(Telefonos o) {
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
    public Telefonos findByID(Integer key) {
        Telefonos telefonos = null;
        try{
            iniciarOperacion();
            telefonos = (Telefonos) getSesion().get(Telefonos.class,key);
        }
        catch(HibernateException be){
            manejarException(be);
            throw be;
        }
        finally{
            getSesion().close();
        }
        return telefonos;
    }

    @Override
    public List<Telefonos> findAll() {
        List<Telefonos> listTelefonos;
        try{
            iniciarOperacion();
            listTelefonos =  getSesion().createQuery("from Telefonos").list();
        }
        finally{
            getSesion().close();
        }
        return listTelefonos;
    }
    
}

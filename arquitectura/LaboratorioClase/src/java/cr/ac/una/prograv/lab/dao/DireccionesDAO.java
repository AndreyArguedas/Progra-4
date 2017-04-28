/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.lab.dao;

import cr.ac.una.prograv.lab.dominio.Direcciones;
import cr.ac.una.prograv.lab.dominio.Telefonos;
import cr.ac.una.prograv.lab.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Estudiante
 */
public class DireccionesDAO extends HibernateUtil implements IBaseDAO<Direcciones,Integer> {

    @Override
    public void save(Direcciones o) {
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
    public Direcciones merge(Direcciones o) {
        try{
            iniciarOperacion();
            o = (Direcciones) getSesion().merge(o);
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
    public void delete(Direcciones o) {
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
    public Direcciones findByID(Integer key) {
        Direcciones direcciones = null;
        try{
            iniciarOperacion();
            direcciones = (Direcciones) getSesion().get(Direcciones.class,key);
        }
        catch(HibernateException be){
            manejarException(be);
            throw be;
        }
        finally{
            getSesion().close();
        }
        return direcciones;
    }

    @Override
    public List<Direcciones> findAll() {
        List<Direcciones> listDirecciones;
        try{
            iniciarOperacion();
            listDirecciones =  getSesion().createQuery("from Direcciones").list();
        }
        finally{
            getSesion().close();
        }
        return listDirecciones;
    }
    
}

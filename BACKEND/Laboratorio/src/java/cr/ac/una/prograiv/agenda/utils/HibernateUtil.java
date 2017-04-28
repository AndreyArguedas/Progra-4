/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.utils;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author LAPTOP
 */
public class HibernateUtil {

    private static final SessionFactory sessionFactory;
    private Transaction transac;
    private Session sesion;

    static {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml) 
            // config file.
            sessionFactory = new AnnotationConfiguration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            // Log the exception. 
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
    
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
    public void iniciarOperacion() throws HibernateException{
        this.sesion = HibernateUtil.getSessionFactory().openSession();
        this.transac = sesion.beginTransaction();
    }
    
    public void manejarExcepcion(HibernateException he) throws HibernateException{
        transac.rollback();
        throw new HibernateException("Ocurrio un erro en la capa dao",he);
    }

    public Transaction getTransac() {
        return transac;
    }

    public Session getSesion() {
        return sesion;
    }
    
    
}

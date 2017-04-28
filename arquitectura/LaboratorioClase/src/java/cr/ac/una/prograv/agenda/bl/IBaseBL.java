/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograv.agenda.bl;

import java.util.List;

/**
 *
 * @author Estudiante
 */
public interface IBaseBL <T,K> {
     public abstract void save(T o);

    public abstract T merge(T o);

    public abstract void delete(T o);

    public abstract T findByID(K key);

    public abstract List<T> findAll(String className);
}

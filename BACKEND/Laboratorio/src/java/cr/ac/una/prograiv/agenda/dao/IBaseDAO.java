/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.dao;

import java.util.List;

/**
 *
 * @author LAPTOP
 */
public interface IBaseDAO <T,K>{
    public abstract void save(T o);
    public abstract T merge(T o);
    public abstract void delete(T o);
    public abstract T findById(K o);
    public abstract List<T> findAll();
}

package cr.ac.una.prograv.lab.dominio;
// Generated 07-abr-2017 18:54:00 by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * Telefonos generated by hbm2java
 */
public class Telefonos  implements java.io.Serializable {


     private int pkTelefono;
     private Personas personas;
     private String descripcion;
     private String ultUsuario;
     private Date ultModificacion;

    public Telefonos() {
    }

	
    public Telefonos(int pkTelefono, Personas personas) {
        this.pkTelefono = pkTelefono;
        this.personas = personas;
    }
    public Telefonos(int pkTelefono, Personas personas, String descripcion, String ultUsuario, Date ultModificacion) {
       this.pkTelefono = pkTelefono;
       this.personas = personas;
       this.descripcion = descripcion;
       this.ultUsuario = ultUsuario;
       this.ultModificacion = ultModificacion;
    }
   
    public int getPkTelefono() {
        return this.pkTelefono;
    }
    
    public void setPkTelefono(int pkTelefono) {
        this.pkTelefono = pkTelefono;
    }
    public Personas getPersonas() {
        return this.personas;
    }
    
    public void setPersonas(Personas personas) {
        this.personas = personas;
    }
    public String getDescripcion() {
        return this.descripcion;
    }
    
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getUltUsuario() {
        return this.ultUsuario;
    }
    
    public void setUltUsuario(String ultUsuario) {
        this.ultUsuario = ultUsuario;
    }
    public Date getUltModificacion() {
        return this.ultModificacion;
    }
    
    public void setUltModificacion(Date ultModificacion) {
        this.ultModificacion = ultModificacion;
    }




}



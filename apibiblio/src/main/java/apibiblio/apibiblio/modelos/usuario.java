package apibiblio.apibiblio.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class usuario {
    @Id
    @Column(name ="idusuario")
    private long idlusuario;
    
   @Column(name = "carnet", length = 100)
    private String carnet; 

    @Column(name = "nombre", length = 100)
    private String nombre; 
    @Column(name = "apellido", length = 100)
    private String apellido;
    public long getIdlusuario() {
        return idlusuario;
    }
    public String getCarnet() {
        return carnet;
    }
    public String getNombre() {
        return nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setIdlusuario(long idlusuario) {
        this.idlusuario = idlusuario;
    }
    public void setCarnet(String carnet) {
        this.carnet = carnet;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    } 
    
}

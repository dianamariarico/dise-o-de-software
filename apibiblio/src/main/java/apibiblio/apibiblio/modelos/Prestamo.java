package apibiblio.apibiblio.modelos;

import jakarta.persistence.*;
@Entity
@Table(name = "prestamo")
public class Prestamo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="idprestamo")
    private long idprestamo;
    
  

    @Column(name = "Fechainicio", length = 100, unique = false)
    private String Fechainicio;

    @ManyToOne
    @JoinColumn(name = "idusuario", referencedColumnName = "idUsuario")
    private Usuario usuario;


    public Prestamo() {
        
    }

    public long getIdprestamo() {
        return idprestamo;
    }

    public void setIdprestamo(long idprestamo) {
        this.idprestamo = idprestamo;
    }

   
    public String getFechainicio() {
        return Fechainicio;
    }

    public void setFechainicio(String fechainicio) {
        Fechainicio = fechainicio;
    }

}

package apibiblio.apibiblio.modelos;

import jakarta.persistence.*;

@Entity // se coloca en el foco para importar la libreria que lo identifica como una entidad
@Table(name = "libro")
// Se colocan la clase con sus columnas
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="idlibro")
    private long idlibro;
    
   @Column(name = "nomlibro", length = 100)
   private String nomlibro;

public long getIdlibro() {
    return idlibro;
}

public String getNomlibro() {
    return nomlibro;
}

public void setIdlibro(long idlibro) {
    this.idlibro = idlibro;
}

public void setNomlibro(String nomlibro) {
    this.nomlibro = nomlibro;
}
    
}

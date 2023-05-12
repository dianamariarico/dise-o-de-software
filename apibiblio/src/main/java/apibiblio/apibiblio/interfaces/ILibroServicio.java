package apibiblio.apibiblio.interfaces;


import java.util.List;
//Importa la clase modelo que se va a usar aquí
import apibiblio.apibiblio.modelos.Libro;

public interface ILibroServicio {
    public List<Libro> listar();

    public Libro obtener(Long idLibro);

    public Libro guardar(Libro libro);

    public boolean eliminar(Long idlibro);
}

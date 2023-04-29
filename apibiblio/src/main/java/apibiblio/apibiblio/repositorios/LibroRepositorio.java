package apibiblio.apibiblio.repositorios;


import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import apibiblio.apibiblio.modelos.Libro;

@Repository
public interface LibroRepositorio extends JpaRepository<Libro, Long>{
    //@Query("SELECT l FROM libro WHERE l.nomLibro like '%'||?1||'%'")
    //List<Libro> buscar(String nombre);
}


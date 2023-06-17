package apibiblio.apibiblio.repositorios;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import apibiblio.apibiblio.modelos.Libro;

@Repository
public interface LibroRepositorio extends JpaRepository<Libro, Long>{
    @Query("SELECT l FROM Libro l WHERE l.nomlibro like '%' || ?1 || '%'")
    List<Libro> buscar(String nombre);
}


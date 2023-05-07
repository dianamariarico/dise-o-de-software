package apibiblio.apibiblio.repositorios;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import apibiblio.apibiblio.modelos.Libro;

@Repository
public interface LibroRepositorio extends JpaRepository<Libro, Long>{
   
}


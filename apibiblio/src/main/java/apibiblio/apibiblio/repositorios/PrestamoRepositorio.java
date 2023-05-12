package apibiblio.apibiblio.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import apibiblio.apibiblio.modelos.Prestamo;
@Repository
public interface PrestamoRepositorio extends JpaRepository<Prestamo,Long>{
    
}

package apibiblio.apibiblio.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import apibiblio.apibiblio.interfaces.ILibroServicio;
import apibiblio.apibiblio.modelos.Libro;
import apibiblio.apibiblio.repositorios.LibroRepositorio;

@Service

public class LibroServicio implements ILibroServicio{

    @Autowired
    LibroRepositorio repositorio;

    @Override
    public List<Libro> listar() {
        return repositorio.findAll();
    }

    @Override
    public Libro obtener(Long id) {
        var libro = repositorio.findById(id);
        return libro.isEmpty() ? null : libro.get();
    }


    @Override
    public Libro guardar(Libro libro) {
        return repositorio.save(libro);
    }

    @Override
    public boolean eliminar(Long id) {
        try {
            repositorio.deleteById(id);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }
}